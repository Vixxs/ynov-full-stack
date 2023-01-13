import React from "react";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose, children }) => {
  return (
    isOpen && (
      <div>
        <div>{children}</div>
        <button onClick={onRequestClose}>Fermer</button>
      </div>
    )
  );
};

export default Modal;