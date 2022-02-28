import Axios, { AxiosResponse } from "axios";
import { getCookie } from "./cookie";

type RequestOptions = {
  headers: Record<string, any>;
  method: "get" | "post" | "GET" | "POST";
};

function handleSuccessResponse(data: AxiosResponse) {
  let result;
  switch (data.status) {
    case 200: {
      result = data.data;
      break;
    }
    case 201: {
      result = data.data;
      break;
    }
    default: {
      result = {};
    }
  }
  return result;
}

function handleErrorResponse(err: Error) {
  return err;
}

function request<T>(
  url: string,
  options?: Partial<RequestOptions>
): Promise<T> {
  const { headers } = options || {};
  const csrf_authorization = getCookie("csrfToken");

  if (csrf_authorization) {
    Object.assign(headers, {
      "x-csrf-token": csrf_authorization,
    });
  }

  const axios = Axios.create({
    timeout: 3000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
    },
  });

  axios.interceptors.response.use(handleSuccessResponse, handleErrorResponse);

  return axios.get(url, options);
}

export default request;
