import React, {useState} from 'react';
import EditModal from '../modal/EditModalComponent';
import ValidateModal from "../modal/ValidateModalComponent";
import {FormData} from "../modal/type";
import UserRowComponent from "../row/UserRowComponent";
import TableComponent from "./TableComponent";

interface UserTableProps {
  data: FormData[];
}

const columns = [
  "Statut",
  "Nom / Prénom",
  "Coordonnées",
  "Nationalité",
  "Actions"
];

const UserTableComponent: React.FC<UserTableProps> = ({data}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<FormData | null>(data[0]);
  const openModal = (index: number) => {
    setSelectedRow(data[index]);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSave = () => {
    setSelectedRow(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <TableComponent columns={columns}>
        {data.map((row, index) => (
          <UserRowComponent key={index} row={row} index={index} openModal={openModal}/>
        ))}
      </TableComponent>
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

export default UserTableComponent;
