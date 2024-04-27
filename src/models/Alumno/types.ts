import { Periodo } from '../../types/gradoSalon';

export type Month = 'marzo' | 'abril' | 'mayo' | 'junio' | 'julio' | 'agosto' | 'septiembre' | 'octubre' | 'noviembre' | 'diciembre';

export type AsistenciaValue = 'A' | 'F' | 'T' | '';

export type AsistenciaAlumno = {
  nombreCompleto: string;
  asistencia: AsistenciaValue;
  alumnoId: string;
};

export type AsistenciaList = {
  dayId: string;
  periodo: Periodo;
  list: { alumnoId: string; asistencia: AsistenciaValue }[];
};
