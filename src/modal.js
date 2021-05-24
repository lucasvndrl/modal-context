import { Modal as ModalComponent } from "antd";
import { useModal } from "./useModal";

const Modal = (props) => {
  const {
    state: { visible },
    closeModal,
  } = useModal();

  return (
    <ModalComponent onCancel={closeModal} onOk={closeModal} visible={visible}>
      <p data-testid="modal">{props.message}</p>
    </ModalComponent>
  );
};

export default Modal;
