import { AxiosResponse } from 'axios';
import toaster from 'react-hot-toast';
import { useProfesor } from '../hooks/useProfesor';
import { nivelState } from '../config/zustand/nivel';
import { AxiosResponseSchema } from '../config/axios/axios';
import { ErrorMessages } from './error';
export function HandleLogOut() {
  useProfesor.getState().clearProfesor();
  nivelState.getState().resetNivel();
  toaster.error('Tu sesión ha finalizado, por favor ingrese nuevamente.');
}
export function updateToken(response: AxiosResponse<AxiosResponseSchema<any>>) {
  const token = response.headers['token'];
  if (!token) {
    HandleLogOut();
    return;
  }

  if (!response.data.ok) {
    if (response.data.message === ErrorMessages.INVALID_TOKEN) {
      return HandleLogOut();
    }
  }
  localStorage.setItem('token', token);
}
