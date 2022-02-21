import create from "zustand";
import { LoginResponse } from "@/types";
import { combine, devtools, persist } from "zustand/middleware";

const userDataKey = "@shg/user-data";
const initialState = {
  status: "",
  accessToken: "",
  refreshToken: "",
};

export const store = combine(initialState, (set) => ({
  setUserData: (res: LoginResponse) => {
    set({
      status: res.status,
      accessToken: res.accessToken,
      refreshToken: res.refreshToken,
    });
  },
  removeUserData: () => {
    set({
      status: "",
      accessToken: "",
      refreshToken: "",
    });
  },
  setToken: (token: { accessToken: string; refreshToken: string }) => {
    set({
      accessToken: token.accessToken,
      refreshToken: token.refreshToken,
    });
  },
}));

export const useAuthStore = create(
  devtools(persist(store, { name: userDataKey }), "auth")
);
