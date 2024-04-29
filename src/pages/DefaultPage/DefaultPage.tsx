import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Shared/Button/Button';
import { Container } from '../../components/Shared/Container/Container';
import { Text } from '../../components/Shared/Text/Text';

export default function DefaultPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <Text>NO HAY NADA AQUÍ</Text>
      <Button $width="16rem" $primary onClick={() => navigate('/menu')}>
        VOLVER AL MENÚ
      </Button>
    </Container>
  );
}
