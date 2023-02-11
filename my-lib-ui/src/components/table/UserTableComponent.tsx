import React, {useState} from 'react';
import EditModal from '../modal/EditModalComponent';
import ValidateModal from "../modal/ValidateModalComponent";
import {UserFormData} from "../modal/type";
import UserRowComponent from "../row/UserRowComponent";
import TableComponent from "./TableComponent";

interface UserTableProps {
  data: UserFormData[];
  onValidate?: (data: UserFormData) => void;
}

const columns = [
  "Statut",
  "Nom / Prénom",
  "Coordonnées",
  "Nationalité",
  "Actions"
];

const UserTableComponent: React.FC<UserTableProps> = ({data, onValidate}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<UserFormData | null>(data ? data[0] : null );
  const openModal = (index: number) => {
    setSelectedRow(data[index]);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <TableComponent columns={columns}>
        {
          data?.length === 0
            ? (
              <tr>
                <td colSpan={5}>Aucun utilisateur</td>
              </tr>
            )
            : (
              data.map(
                (row, index) => (
                  <UserRowComponent key={index} row={row} index={index} openModal={openModal}/>
                )
              )
            )
        }

      </TableComponent>
      { selectedRow && (
        selectedRow.status
          ? <EditModal
            isOpen={modalIsOpen}
            onClose={closeModal}
            data={selectedRow}
          />
          : <ValidateModal
            isOpen={modalIsOpen}
            onClose={closeModal}
            onSave={onValidate}
            data={selectedRow}
          />
        )
      }
    </div>
  );
};

export default UserTableComponent;
