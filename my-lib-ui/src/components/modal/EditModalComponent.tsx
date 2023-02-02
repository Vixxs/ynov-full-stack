import React from 'react';
import Modal from './ModalComponent';
import {ModalProps} from "./type";
import ButtonComponent from "../button/ButtonComponent";
import InputComponent from "../input/InputComponent";
import {SelectComponent} from "../../index";

const EditModal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    data,
}) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //onSave(data);
        onClose();
    };

    return (
        <Modal label="Modifier l’utilisateur" isOpen={isOpen} onRequestClose={onClose}>
          <form onSubmit={handleSubmit}>
            <InputComponent name="lastname" type="text" label="Nom" defaultValue={data.lastname}></InputComponent>
            <InputComponent name="firstname" label="Prénom" defaultValue={data.firstname}></InputComponent>
            <InputComponent name="email" label="E-mail" type="email" defaultValue={data.email}></InputComponent>
            <InputComponent name="phoneNumber" label="Numéro de téléphone" defaultValue={data.phoneNumber}></InputComponent>
            <SelectComponent name="nationality" label="Nationalité">
                <option value={data.nationality}>{data.nationality}</option>
            </SelectComponent>
            <ButtonComponent label="Enregistrer les modifications" type="submit"></ButtonComponent>
            <ButtonComponent className="delete" label="Supprimer l’utilisateur" type="submit"></ButtonComponent>
          </form>
        </Modal>
      );
    };

    export default EditModal;
