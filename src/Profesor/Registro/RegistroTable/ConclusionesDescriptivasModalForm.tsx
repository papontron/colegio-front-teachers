import { useContext, useRef } from 'react';
import { Button } from '../../../components/Shared/Button/Button';
import { Container } from '../../../components/Shared/Container/Container';
import { TextArea } from '../../../components/Shared/TextArea/TextArea';
import { RegistroContext } from '../Registro';

export default function ConclusionesDescriptivasModalForm() {
  const { conclusionesDescriptivasModalData, dispatch, setShowModal } = useContext(RegistroContext)!;
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  return (
    <Container $direction="column" $width="100%" $gap="2rem">
      <TextArea defaultValue={conclusionesDescriptivasModalData!.data} rows={5} $padding="6px" ref={textAreaRef}></TextArea>
      <Container $justifyContent="space-between">
        <Button $width="max-content" $primary onClick={() => guardar()}>
          Guardar
        </Button>
        <Button $width="max-content" $danger onClick={() => setShowModal(false)}>
          Cancelar
        </Button>
      </Container>
    </Container>
  );
  function guardar() {
    dispatch({
      type: 'updateConclusionesDescriptivas',
      payload: {
        alumnoId: conclusionesDescriptivasModalData!.alumnoId,
        periodo: conclusionesDescriptivasModalData!.periodo,
        data: textAreaRef.current!.value.trim(),
      },
    });
    setShowModal(false);
  }
}
