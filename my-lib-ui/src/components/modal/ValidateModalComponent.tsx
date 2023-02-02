import React from 'react';
import Modal from './ModalComponent';
import {ModalProps} from "./type";
import ButtonComponent from "../button/ButtonComponent";
import ReadInputComponent from "../input/ReadInputComponent";

const ValidateModal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    data,
    onSave
}) => {
    const handleSave = (event) => {
      event.preventDefault();
      onSave(data)
      onClose();
    };

    return (
        <Modal label="Vérifier l’utilisateur" isOpen={isOpen} onRequestClose={onClose}>
          <form onSubmit={handleSave}>
            <ReadInputComponent label="Nom / Prénom" value={data.lastname.toUpperCase() + " " + data.firstname}></ReadInputComponent>
            <ReadInputComponent label="Coordonnées" value={data.email + " " + data.phoneNumber}></ReadInputComponent>
            <ReadInputComponent capitalize={true} label="Nationalité" value={data.nationality}></ReadInputComponent>
            <ButtonComponent label="Valider l’utilisateur" type="submit"></ButtonComponent>
          </form>
        </Modal>
      );
    };

    export default ValidateModal;
