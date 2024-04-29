import { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { nivelState } from '../zustand/nivel';
import { yearState } from '../zustand/year';
import { tokenState } from '../zustand/token';
type ResponseOk<T> = {
  ok: true;
  payload: T;
};

type ResponseError = {
  ok: false;
  message: string;
};

export type AxiosResponseSchema<T> = ResponseOk<T> | ResponseError;

function onRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
  const nivel = nivelState.getState().nivel;
  const year = yearState.getState().year;
  const token = tokenState.getState().token;
  config.headers.nivel = nivel;
  config.headers.year = year;
  config.headers.token = token;
  return config;
}

function onRequestError(requestError: AxiosError): Promise<AxiosError> {
  return Promise.reject(requestError);
}

function onResponse(response: AxiosResponse): AxiosResponse {
  return response;
}
function onResponseError(responseError: AxiosError<{ ok: false; message: string }>): Promise<AxiosError> {
  throw new Error(responseError.response?.data.message);
}
export default function setupAxiosInterceptorsTo(axiosInstance: AxiosInstance) {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
}
