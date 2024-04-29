import axios from 'axios';
import { SalonProfesor } from '../../hooks/useProfesor';
import setupAxiosInterceptorsTo, { AxiosResponseSchema } from '../../config/axios/axios';
import { API_END_POINTS } from '../../config/axios/endPoints';
import { API_URL } from '../../var/envData';
import { RegistroNotasProfesor } from './types';

setupAxiosInterceptorsTo(axios);

export class Profesor {
  static async changeProfesorPassword({ newPassword, userId, currentPassword }: { currentPassword: string; newPassword: string; userId: string }) {
    const response = await axios.post<AxiosResponseSchema<null>>(API_URL + API_END_POINTS.changeProfesorPassword, {
      newPassword,
      userId,
      currentPassword,
    });
    return response;
  }
  static async fetchRegistroBySalon({ salon }: { salon: SalonProfesor }) {
    const API_END_POINT = API_END_POINTS.profesorGetRegistroNotasBySalon;
    const response = await axios.post<AxiosResponseSchema<RegistroNotasProfesor[]>>(API_URL + API_END_POINT, { salon });
    return response;
  }
  static async updateRegistroProfesor({ registro, isTutor }: { registro: RegistroNotasProfesor; isTutor: boolean }) {
    const API_END_POINT = API_END_POINTS.updateRegistroProfesor;
    const response = await axios.post<AxiosResponseSchema<null>>(API_URL + API_END_POINT, { registro, isTutor });
    return response;
  }
}
