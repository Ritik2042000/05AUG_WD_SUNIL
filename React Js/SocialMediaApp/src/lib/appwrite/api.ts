import { INewUser } from "@/types";
import { account, appwriteConfig, avatras, database } from "./config";
import { ID } from "appwrite";

export const createUserAccount = async (user: INewUser) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    if (!newAccount) throw Error;

    const avatraUrl = avatras.getInitials(user.name);

    const newUser = await saveUserToDB({
      accountId: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
      username: user.username,
      imageUrl: avatraUrl,
    });

    return newUser;
  } catch (error) {
    console.log(error);
  }
};

export const saveUserToDB = async (user: {
  accountId: string;
  email: string;
  name: string;
  imageUrl: URL;
  username?: string;
}) => {
  try {
    const newUser = await database.createDocument(
      appwriteConfig.databases,
      appwriteConfig.userColletionId,
      ID.unique(),
      user
    );
    return newUser;
  } catch (error) {
    console.log(error);
  }
};
