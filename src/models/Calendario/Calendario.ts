import axios from 'axios';
import setupAxiosInterceptorsTo, { AxiosResponseSchema } from '../../config/axios/axios';
import { API_URL } from '../../var/envData';
import { API_END_POINTS } from '../../config/axios/endPoints';
setupAxiosInterceptorsTo(axios);
export default class Calendario {
  static async fetchCurrentPeriodo() {
    const response = await axios.get<AxiosResponseSchema<string>>(API_URL + API_END_POINTS.fetchCurrentPeriodo);
    return response;
  }
}
