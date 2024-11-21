import { INewUser } from "@/types";
import { appwriteConfig, account, databases, avatars } from "./config";
import { ID, Query } from "appwrite";


export async function createUserAccount(user: INewUser) {
  try {
    console.log('newaccount');
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if (!newAccount) throw Error;

    console.log(newAccount,'newaccount');
    
    const avatarUrl = avatars.getInitials(user.name);
    console.log(avatarUrl,'image');

    const newUser = await saveUserToDB({
      accountId: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
      username: user.username,
      imageUrl: avatarUrl,
    });

    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// ============================== SAVE USER TO DB
export async function saveUserToDB(user: {
  accountId: string;
  email: string;
  name: string;
  imageUrl: string;
  username?: string;
}) {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user
    );

    return newUser;
  } catch (error) {
    console.log(error);
  }
}

export const signInAccount = async (user: {
  email: string;
  password: string;
}) => {
  try {
    const session = await account.createEmailPasswordSession(
      user.email,
      user.password
    );
    return session;
  } catch (error) {
    console.log(error);
  }
};


// export async function getAccount() {
//   try {
//     const currentAccount = await account.get();

//     return currentAccount;
//   } catch (error) {
//     console.log(error);
//   }
// }

export const getCurrentUser = async () => {
  console.log('insidecurrentfnc');
  
  try {
    console.log('insidecurrentfnctry');
    const currentAccount = await account.get();
    console.log(currentAccount,'currentAccount');
    
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;
    console.log(currentUser, "currentuser");

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    // return null;
  }
};
