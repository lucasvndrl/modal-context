import { createContext, useContext, useState } from 'react';

const ModalContext = createContext({});

const ModalProvider = ({children}) => {
    const [state, setState] = useState({visible: false});

    const openModal = (payload) => setState({...payload, visible: true});
    const closeModal = () => setState({visible: false});

    return <ModalContext.Provider value={{ state, openModal, closeModal}}>
        {children}
    </ModalContext.Provider>
}

const useModal = () => {
    const context = useContext(ModalContext)
    return context;
}

export {useModal, ModalProvider}