import Calendario from '../models/Calendario/Calendario';
import { updateToken } from './axiosUtils';

export async function fetchCurrentPeriodo() {
  const response = await Calendario.fetchCurrentPeriodo();
  updateToken(response);
  if (!response.data.ok) throw new Error(response.data.message);
  return response.data.payload;
}
