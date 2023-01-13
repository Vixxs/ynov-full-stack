import React, { useState } from 'react';
import Modal from './ModalComponent';

interface FormData {
    status: boolean;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    nationality: string;
}

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: FormData) => void;
    initialData: FormData;
}

const EditModal: React.FC<EditModalProps> = ({
    isOpen,
    onClose,
    onSave,
    initialData,
}) => {
    const [formData, setFormData] = useState(initialData);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSave(formData);
        onClose();
    };
    
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
          <form onSubmit={handleSubmit}>
            <label>
              Statut:
              <input
                type="checkbox"
                name="status"
                checked={formData.status}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Nom:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Prénom:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Téléphone:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Nationalité:
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit">Enregistrer</button>
            <button type="button" onClick={onClose}>
              Annuler
            </button>
          </form>
        </Modal>
      );
    };
    
    export default EditModal;
    export { FormData };
    