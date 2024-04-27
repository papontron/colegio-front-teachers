import { ReactNode } from 'react';
import Modal from '../../../components/Shared/Modal/Modal';

export default function EditConClusionesDescriptivasModal({
  children,
  onCloseModal,
  data,
}: {
  onCloseModal: () => void;
  children: ReactNode;
  data: { periodo: string; alumnoId: string; data: string; nombres: string; apellidos: string } | null;
}) {
  if (!data) {
    return null;
  }
  return (
    <Modal width="500px" onCloseModal={onCloseModal} title={`Editando: ${data.apellidos}, ${data.nombres}`}>
      {children}
    </Modal>
  );
}
