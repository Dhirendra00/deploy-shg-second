// import { useTokenStore } from "@/modules/auth/useTokenStore";
import { LoginRequest, LoginResponse } from "@/types";
import { ifError } from "assert";

import { AxiosResponse } from "axios";

import { privateAgent, publicAgent } from ".";

export const loginUser = (
  loginRequest: LoginRequest
): Promise<AxiosResponse<LoginResponse>> => {
  return new Promise((resolve, reject) => {
    publicAgent
      .post(`auth/login/`, loginRequest)
      .then((response) => resolve(response))
      .catch((err) => {
        console.log(err);
        reject(err.response.data.message);
      });
  });
};

export const logOut = (): Promise<AxiosResponse> => {
  // const refresh = useTokenStore.getState().refreshToken;
  // const body: LogoutRequest = { refresh: refresh };
  return privateAgent.post(`auth/logout/`);
};

export const resetPassword = (email: string): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    publicAgent
      .post(`auth/reset-password`, email)
      .then((response) => resolve(response))
      .catch((err) => reject(err.response.data.message));
  });
};

export const newPassword = (body: {
  password: string;
  confirmPassword: string;
}): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    publicAgent
      .put(`auth/password`, body)
      .then((response) => resolve(response))
      .catch((err) => reject(err.response.data.message));
  });
};

export const fetchSinglePatient = (id: any): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    privateAgent
      .get(`patients/${id}`)
      .then((response) => resolve(response))
      .catch((error) => console.log(error));
  });
};

export const fetchAllPatient = () => {
  return new Promise((resolve, reject) => {
    publicAgent
      .get("patients")
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  });
};

export const searchPatient = (
  id: string,
  number: string
): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    privateAgent
      .get(`patients/search?id=${id}&number=${number}`)
      .then((response) => resolve(response))
      .catch((error) => {
        reject(error.response.data.message);
      });
  });
};
// test
export const searchPatientTest = (
  id: string,
  number: string
): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    privateAgent
      .get(`patients/search?id=${id}&number=${number}`)
      .then((response) => resolve(response))
      .catch((error) => {
        reject(error.response.data.message);
      });
  });
};
export const addPatientData = (body: any) => {
  return new Promise((resolve, reject) =>
    privateAgent
      .post<any>(`patients/`, body)
      .then((response) => resolve(response))
      .catch((error) => reject(error.response.data.message))
  );
};

export const addPatientVitals = (
  body: any,
  id: any
): Promise<AxiosResponse<any>> => {
  return new Promise((resolve, reject) =>
    privateAgent
      .post(`patients/vitals/${id}`, body)
      .then((response) => resolve(response))
      .catch((error) => {
        reject(error.response.data.message);
      })
  );
};

export const updatePatientVitals = (
  body: any,
  id: any
): Promise<AxiosResponse<any>> => {
  return new Promise((resolve, reject) =>
    privateAgent
      .put(`patients/vitals/${id}`, body)
      .then((response) => resolve(response))
      .catch((error) => {
        reject(error.response.data.message);
      })
  );
};
export const addPatientHistory = (
  body: any,
  id: any
): Promise<AxiosResponse<any>> => {
  return new Promise((resolve, reject) => {
    privateAgent
      .post(`/patients/history/${id}`, body)
      .then((response) => resolve(response))
      .catch((error) => {
        reject(error.response.data.message);
      });
  });
};

export const updatePatientHistory = (
  body: any,
  id: any
): Promise<AxiosResponse<any>> => {
  return new Promise((resolve, reject) => {
    privateAgent
      .put(`/patients/history/${id}`, body)
      .then((response) => resolve(response))
      .catch((err) => {
        console.log(err.response);
        reject(err.response.data.message);
      });
  });
};
export const addPatientExamination = (
  body: any,
  id: any
): Promise<AxiosResponse<any>> => {
  return new Promise((resolve, reject) => {
    privateAgent
      .post(`/patients/examination/${id}`, body)
      .then((response) => resolve(response))
      .catch((err) => {
        console.log(err.response);
        reject(err.response.data.message);
      });
  });
};
export const updatePatientExamination = (
  body: any,
  id: any
): Promise<AxiosResponse<any>> => {
  return new Promise((resolve, reject) => {
    privateAgent
      .put(`/patients/examination/${id}`, body)
      .then((response) => resolve(response))
      .catch((err) => {
        console.log(err.response);
        reject(err.response.data.message);
      });
  });
};
