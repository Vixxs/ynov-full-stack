import React, { useState } from 'react';
import EditModal from './EditModalComponent';
import { FormData } from './EditModalComponent'
import Modal from './ModalComponent'

interface DataTableProps {
    data: FormData[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    
    const openModal = (index: number) => {
        setSelectedIndex(index);
        setModalIsOpen(true);
    };
    
    const closeModal = () => {
        setModalIsOpen(false);
    };
    
    const handleSave = (formData: FormData) => {
        if (selectedIndex !== null) {
            data[selectedIndex] = formData;
        }
    };
    
    return (
        <>
          <table>
            <thead>
              <tr>
                <th>Statut</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Nationalité</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.status ? 'Actif' : 'Inactif'}</td>
                  <td>{row.lastName}</td>
                  <td>{row.firstName}</td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                  <td>{row.nationality}</td>
                  <td>
                    <button onClick={() => openModal(index)}>Éditer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <EditModal
            isOpen={modalIsOpen}
            onClose={closeModal}
            onSave={handleSave}
            initialData={data[selectedIndex || 0]}
          />
        </>
      );
    };
        
export default DataTable;