import React from 'react';
interface ModalProps {
    label: string;
    isOpen: boolean;
    onRequestClose: () => void;
    children: React.ReactNode;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
