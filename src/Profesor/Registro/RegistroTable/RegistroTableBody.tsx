import { Fragment } from 'react/jsx-runtime';
import Table from '../../../components/Shared/Table/Table';
import DisplayAsistenciasTardanzas from './DisplayAsistenciasTardanzas';
import DisplayNotasCurso from './DisplayNotasCurso';
import { ConvertPeriodoToIndex } from './utils';
import { CursoInfo, RegistroProfesor } from '../../../models/Profesor/types';
import { Periodo } from '../../../types/gradoSalon';
import ConclusionesDescriptivasUI from './ConclusionesDescriptivasUI';

export default function RegistroTableBody({
  registro,
  cursosList,
  periodo,
}: {
  cursosList: CursoInfo[];
  registro: RegistroProfesor;
  periodo: Periodo;
}) {
  if (registro.isTutor) {
    return (
      <Table.Body>
        {registro.notas.map((record) => {
          return (
            <Fragment key={record.alumnoId}>
              <Table.Body.Item>{record.apellidos + ', ' + record.nombres}</Table.Body.Item>
              {cursosList.map((curso) => {
                return (
                  <Fragment key={curso.code}>
                    <Table.Body.Item>
                      <DisplayNotasCurso alumnoId={record.alumnoId} cursoKey={curso.key} periodo={periodo} curso={record.cursos[curso.key]} />
                    </Table.Body.Item>
                  </Fragment>
                );
              })}

              <Table.Body.Item>
                <DisplayAsistenciasTardanzas alumnoId={record.alumnoId} name="tardanzas" periodo={periodo} record={record.tardanzas} />
              </Table.Body.Item>

              <Table.Body.Item>
                <DisplayAsistenciasTardanzas alumnoId={record.alumnoId} name="inasistencias" periodo={periodo} record={record.inasistencias} />
              </Table.Body.Item>

              <Table.Body.Item classN="border-right">
                <ConclusionesDescriptivasUI
                  key={record.conclusionesDescriptivas[ConvertPeriodoToIndex(periodo)].length}
                  nombres={record.nombres}
                  apellidos={record.apellidos}
                  alumnoId={record.alumnoId}
                  periodo={periodo}
                  data={record.conclusionesDescriptivas[ConvertPeriodoToIndex(periodo)]}
                />
              </Table.Body.Item>
            </Fragment>
          );
        })}
      </Table.Body>
    );
  } else {
    return (
      <Table.Body>
        {registro.notas.map((record) => {
          return (
            <Fragment key={record.alumnoId}>
              <Table.Body.Item>{record.apellidos + ', ' + record.nombres}</Table.Body.Item>
              {cursosList.map((curso) => {
                return (
                  <Fragment key={curso.code}>
                    <Table.Body.Item>
                      <DisplayNotasCurso alumnoId={record.alumnoId} cursoKey={curso.key} periodo={periodo} curso={record.cursos[curso.key]} />
                    </Table.Body.Item>
                  </Fragment>
                );
              })}
            </Fragment>
          );
        })}
      </Table.Body>
    );
  }
}
