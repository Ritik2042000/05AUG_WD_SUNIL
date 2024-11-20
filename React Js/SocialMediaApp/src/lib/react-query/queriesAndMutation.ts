import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserAccount } from "../appwrite/api";
import { INewUser } from "@/types";

export const useCreateUserAccountMutation = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};
