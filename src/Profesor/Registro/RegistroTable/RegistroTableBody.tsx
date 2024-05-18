import { Fragment } from 'react/jsx-runtime';
import Table from '../../../components/Shared/Table/Table';
import DisplayAsistenciasTardanzas from './DisplayAsistenciasTardanzas';
import DisplayNotasCurso from './DisplayNotasCurso';
import { ConvertPeriodoToIndex } from './utils';
import { CursoInfo, RegistroProfesor } from '../../../models/Profesor/types';
import { Periodo } from '../../../types/gradoSalon';
import ConclusionesDescriptivasUI from './ConclusionesDescriptivasUI';
import { Container } from '../../../components/Shared/Container/Container';

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
        {registro.notas.map((record, index) => {
          return (
            <Fragment key={record.alumnoId}>
              <Table.Body.Item>
                <Container $direction="row" $width="100%" $gap=".5rem" $padding="0 0 0 .5rem">
                  <div>{`[${index + 1}]`}</div>
                  <div>{record.apellidos + ', ' + record.nombres}</div>
                </Container>
              </Table.Body.Item>
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
                <DisplayAsistenciasTardanzas periodo={periodo} record={record.tardanzas} alumnoId={record.alumnoId} name="tardanzas" />
              </Table.Body.Item>

              <Table.Body.Item>
                <DisplayAsistenciasTardanzas periodo={periodo} record={record.inasistencias} name="inasistencias" alumnoId={record.alumnoId} />
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
