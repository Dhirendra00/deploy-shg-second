/* eslint-disable react-hooks/rules-of-hooks */
import { useAuthStore } from "@/modules/auth/useAuthStore";
import { LoginRequest } from "@/types";

import { loginUser, logOut } from "../requests/authRequests";

export const onLogin = async (email: string, password: string) => {
  const request: LoginRequest = { userEmailPhone: email, password };

  return new Promise(
    async (resolve, reject) =>
      await loginUser(request)
        .then((response) => {
          useAuthStore.getState().setUserData(response.data);

          resolve("Logged In");
        })
        .catch((error) => {
          reject(new Error("Email or Password is Invalid").message);
        })
  );
};

export const onLogout = async () => {
  return new Promise(
    async (resolve, reject) =>
      await logOut()
        .then((response) => {
          console.log(response);
          useAuthStore.getState().removeUserData();
          resolve("Logged Out Successfully");
        })
        .catch((error) => {
          reject(error.response ? error.response.data.message : error);
        })
  );
};
