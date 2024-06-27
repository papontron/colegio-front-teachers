import { MONTH_NAME } from './utils';

export type AsistenciaValue = '' | 'A' | 'F' | 'T';
export type AsistenciaRecord = {
  day: number;
  month: MONTH_NAME;
  asistencia: AsistenciaValue;
  dayId: string;
  justificado?: undefined | true;
};
export type AsistenciasList = {
  nombreCompleto: string;
  alumnoId: string;
  records: AsistenciaRecord[];
}[];
