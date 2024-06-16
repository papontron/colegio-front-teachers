import { Fragment } from 'react/jsx-runtime';
import Table from '../../../components/Shared/Table/Table';
import { AsistenciasReducerState } from '../AsistenciasReducer';
import AsistenciaPicker from './AsistenciaPicker';

export default function AsistenciasTable({ alumnos }: { alumnos: AsistenciasReducerState }) {
  return (
    <Table $gridTempCols="45px 300px 45px" $justifyContent="center" $alignItems="center" $headerPadding="5px" $height="30px">
      <Table.Header>
        <Table.Header.Item>N°</Table.Header.Item>
        <Table.Header.Item>Alumno</Table.Header.Item>
        <Table.Header.Item>Asist.</Table.Header.Item>
      </Table.Header>
      <Table.Body>
        {alumnos.map((record, index) => (
          <Fragment key={index}>
            <Table.Body.Item>{index + 1}</Table.Body.Item>
            <Table.Body.Item>{record.nombreCompleto}</Table.Body.Item>
            <Table.Body.Item>
              <AsistenciaPicker alumnoId={record.alumnoId} value={record.asistencia === '' ? 'A' : record.asistencia} />
            </Table.Body.Item>
          </Fragment>
        ))}
      </Table.Body>
    </Table>
  );
}
