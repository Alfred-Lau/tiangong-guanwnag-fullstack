import Axios, { AxiosResponse } from "axios";

type RequestOptions = {};

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

function request(url: string, options?: RequestOptions): Promise<any> {
  const axios = Axios.create({
    timeout: 3000,
  });

  axios.interceptors.response.use(handleSuccessResponse, handleErrorResponse);
  return axios.get(url, options);
}

export default request;
