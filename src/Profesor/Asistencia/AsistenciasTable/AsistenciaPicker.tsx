import { Container } from '../../../components/Shared/Container/Container';
import Select from '../../../components/Shared/Select/Select';
import { theme } from '../../../config/styled/styled';
import { AsistenciaValue } from '../../../models/Alumno/types';

export default function AsistenciaPicker({ alumnoId, value }: { value: AsistenciaValue; alumnoId: string }) {
  if (value === 'T') {
    return (
      <Container $height="100%" $width="100%" $bgColor={theme.colors.red.dark} $color="white" $justifyContent="center" $alignItems="center">
        {value}
      </Container>
    );
  }
  return (
    <Select
      small
      heigth="100%"
      rect
      width="100%"
      name={`asistencia-${alumnoId}`}
      label="asistencia"
      options={[
        { label: 'A', value: 'A' },
        { label: 'F', value: 'F' },
      ]}
      defaultValue={{ label: value, value }}
    />
  );
}
