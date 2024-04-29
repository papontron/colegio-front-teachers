import styled from 'styled-components';
import { Container } from '../../components/Shared/Container/Container';
import { Text } from '../../components/Shared/Text/Text';
import logo from '/logo.png';
const Logo = styled.img`
  width: 120px;
  object-fit: contain;
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

      <Container $width="120px" $direction="row" $alignItems="center" $justifyContent="center">
        <Logo src={logo}></Logo>
      </Container>
    </Container>
  );
}
