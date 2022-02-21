export type LoginRequest = {
  userEmailPhone: string;
  password: string;
};

export type LoginResponse = {
  status: "sucess" | "failed";
  message: string;
  accessToken: string;
  refreshToken: string;
};

export type LoginRefreshRequest = {
  refresh: string;
};

export type PatientSearchRequest = {
  id: string;
  number: string;
};
