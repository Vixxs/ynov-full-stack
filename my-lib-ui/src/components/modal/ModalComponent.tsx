import React from 'react';

interface ModalProps {
  label: string;
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({label, isOpen, onRequestClose, children}) => {
  return (
    isOpen && (
      <div className="my-lib-ui-modal">
        <div className="content">
          <h3>{label.toUpperCase()}</h3>
          <div>{children}</div>
          <button className="cancel" onClick={onRequestClose}>Annuler</button>
        </div>
      </div>
    )
  );
};

export default Modal;
