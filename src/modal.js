import { Modal as ModalComponent } from 'antd';
import { useModal } from './modal.context'

const Modal = () => {
    const { state: { message, visible }, closeModal } = useModal();

    return (
        <ModalComponent 
        onCancel={closeModal} 
        onOk={closeModal}
        visible={visible}
        > 
            <p>{message}</p>
        </ModalComponent>
    )
}

export default Modal