import { CursoInfo, RegistroNoTutor, RegistroTutor } from '../../../models/Profesor/types';
import { Nivel, Periodo } from '../../../types/gradoSalon';
import { COMPETENCIA_WIDTH, CURSOS_MAP_BY_NIVEL } from './var';

export default function GetTableDataFromRegistro(registro: RegistroNoTutor | RegistroTutor, nivel: Nivel) {
  if (registro.notas.length === 0) return { gridTemplateColumns: '', cursosList: [] };
  // let headersLabels: string[] = Object.keys(registro.notas[0].cursos).map((cursoKey) => CURSOS_MAP_BY_NIVEL[nivel][cursoKey].code);
  const cursosList: CursoInfo[] = Object.keys(registro.notas[0].cursos).map((cursoKey) => {
    return CURSOS_MAP_BY_NIVEL[nivel][cursoKey];
  });
  // if (registro.isTutor) {
  //   headersLabels.push('Tardanzas');
  //   headersLabels.push('Inasistencias');
  //   headersLabels.push('Conclusiones Descriptivas');
  // }
  // headersLabels = ['Alumno', ...headersLabels];
  let gridTemplateColumns: string = Object.keys(registro.notas[0].cursos).reduce((acc, header) => {
    return (acc = acc + `${CURSOS_MAP_BY_NIVEL[nivel][header].numCompetencias * COMPETENCIA_WIDTH}px `);
  }, `300px `);
  if (registro.isTutor) {
    gridTemplateColumns = gridTemplateColumns + `80px 80px ${COMPETENCIA_WIDTH}px`;
  }
  return { gridTemplateColumns, cursosList };
}

export function ConvertPeriodoToIndex(periodo: Periodo) {
  switch (periodo) {
    case 'primerPeriodo':
      return 0;
    case 'segundoPeriodo':
      return 1;
    case 'tercerPeriodo':
      return 2;
    case 'cuartoPeriodo':
      return 3;
  }
}
