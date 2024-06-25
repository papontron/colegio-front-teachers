import styled from 'styled-components';
import { Container } from '../../components/Shared/Container/Container';
import { Text } from '../../components/Shared/Text/Text';
import logo from '/logo.png';
const Logo = styled.img`
  width: 120px;
  object-fit: contain;
`;
const ComunicadoWrapper = styled(Container)`
  box-shadow: 0 0 4px;
`;
export default function MenuIndex() {
  return (
    <Container $direction="column" $width="100%" $alignItems="center" $gap="2rem">
      <Text $large $fontWeight="700" $textAlign="center" $color={'white'}>
        Jesús el Nazareno de Villas de Ancón
      </Text>
      <Text $normal $fontWeight="700" $textAlign="center" $color={'white'}>
        INTRANET
      </Text>
      <Container $width="100%" $direction="column" $alignItems="center" $justifyContent="center" $gap="3rem">
        <Logo src={logo}></Logo>
        <ComunicadoWrapper $width="95%" $direction="column" $padding="2rem" $bgColor="white" $gap="2rem">
          <Text $large $fontWeight="600" $danger $textAlign="center">
            Comunicado
          </Text>
          <Text $small $fontWeight="200" $color="white"></Text>
          <Text>
            Pasar la asistencia diaria del alumnado es deber de cada tutor, por lo que a partir del 01 de julio la omisión de esta tarea estará sujeta
            a una penalidad salarial de S/.10.00 por cada día omitido, las cuales se harán efectivas por el señor promotor cada fin de mes.
          </Text>
          <Text>
            {' '}
            El sistema virtual está disponible cada día laborable a partir de las <span>11:30am</span> hasta las <span>6:45pm</span>.
          </Text>
        </ComunicadoWrapper>
      </Container>
    </Container>
  );
}
