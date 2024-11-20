import { Client, Account, Avatars, Databases, Storage } from "appwrite";

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url:import.meta.env.VITE_APPWRITE_URL,
  databases:import.meta.env.VITE_APPWRITE_DATABASES_ID ,
  storageId:import.meta.env.VITE_APPWRITE_STORAGE_ID ,
  userColletionId:import.meta.env.VITE_APPWRITE_USERS_ID ,
  postColletionId:import.meta.env.VITE_APPWRITE_POSTS_ID ,
  saveColletionId:import.meta.env.VITE_APPWRITE_SAVES_ID ,
   
};

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url)
export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatras = new Avatars(client);
