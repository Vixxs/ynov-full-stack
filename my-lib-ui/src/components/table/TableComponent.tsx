import React, {useState} from 'react';
import EditModal from '../modal/EditModalComponent';
import {ButtonComponent} from "../../index";
import ValidateModal from "../modal/ValidateModalComponent";
import {FormData} from "../modal/type";

interface DataTableProps {
  data: FormData[];
  onValidate: (data: FormData[], validate: boolean) => void;
  onUpdate: (data: FormData[]) => void;

}

const DataTable: React.FC<DataTableProps> = ({data}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<FormData | null>(data[0]);
  const openModal = (index: number) => {
    setSelectedRow(data[index]);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSave = (formData: FormData) => {
    setSelectedRow(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <table className="my-lib-ui-table">
        <thead>
        <tr>
          <th>Statut</th>
          <th>Nom / Prénom</th>
          <th>Coordonnées</th>
          <th>Nationalité</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="bold">{row.status ? '✅ Validé' : '⚠️ En attente'}</td>
            <td>{row.lastName.toUpperCase()}<br/>{row.firstName}</td>
            <td>{row.email}<br/>{row.phone}</td>
            <td>{row.nationality}</td>
            <td>
              {
                row.status
                  ? <ButtonComponent label="Éditer" onClick={() => openModal(index)}></ButtonComponent>
                  : <ButtonComponent className="check" label="Vérifier"
                                     onClick={() => openModal(index)}></ButtonComponent>
              }
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      {
        selectedRow.status
          ? <EditModal
            isOpen={modalIsOpen}
            onClose={closeModal}
            onSave={handleSave}
            data={selectedRow}
          />
          : <ValidateModal
            isOpen={modalIsOpen}
            onClose={closeModal}
            onSave={handleSave}
            data={selectedRow}
          />
      }

    </div>
  );
};

export default DataTable;
