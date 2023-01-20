import React from 'react';
import Modal from './ModalComponent';
import {ModalProps} from "./type";
import ButtonComponent from "../button/ButtonComponent";
import InputComponent from "../input/InputComponent";
import {SelectComponent} from "../../index";
import ReadInputComponent from "../input/ReadInputComponent";

const ValidateModal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSave,
    data,
}) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //onSave(data);
        onClose();
    };

    return (
        <Modal label="Vérifier l’utilisateur" isOpen={isOpen} onRequestClose={onClose}>
          <form onSubmit={handleSubmit}>
            <ReadInputComponent label="Nom / Prénom" value={data.lastName + " " + data.firstName}></ReadInputComponent>
            <ButtonComponent label="Valider l’utilisateur" type="submit"></ButtonComponent>
            <ButtonComponent className="delete" label="Refuser l’utilisateur" type="submit"></ButtonComponent>
          </form>
        </Modal>
      );
    };

    export default ValidateModal;
