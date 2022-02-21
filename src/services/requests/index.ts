import { LoginRefreshRequest } from "@/types";
import { useAuthStore } from "@/modules/auth/useAuthStore";
import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_URL ??
  "https://shg-backend1.herokuapp.com/shg/api/";

export const privateAgent = axios.create({
  baseURL,
});

export const publicAgent = axios.create({
  baseURL,
});

privateAgent.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.getState().accessToken;
    if (accessToken && config.headers) {
      config.headers["Authorization"] = `JWT ${accessToken}`;
    }

    return config;
  },
  (error) => {
    useAuthStore.getState().removeUserData();
  }
);

// response interceptor to refresh token on receiving token expired error
privateAgent.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    const refreshToken = useAuthStore.getState().refreshToken;
    if (
      refreshToken &&
      error?.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refreshRequest: LoginRefreshRequest = { refresh: refreshToken };
      return axios
        .post(`${baseURL}auth/refresh/`, refreshRequest)
        .then((res: any) => {
          if (res.status === 200) {
            const tokenData: string = res.data.access;
            useAuthStore.getState().setToken({
              accessToken: tokenData,
              refreshToken: refreshToken,
            });
            return privateAgent(originalRequest);
          }
        })
        .catch(() => {
          useAuthStore.getState().removeUserData();
        });
    }
    return Promise.reject(error);
  }
);
