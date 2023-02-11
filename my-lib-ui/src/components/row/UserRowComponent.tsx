import React from 'react';
import {ButtonComponent} from "../../index";
import {UserFormData} from "../modal/type";
import RowComponent from "./RowComponent";

interface UserRowProps {
  row: UserFormData;
  index: number;
  openModal: (index: number) => void;
}

const UserRowComponent: React.FC<UserRowProps> = ({row, index, openModal }) => {

  return (
    <RowComponent key={index}>
      <td className="bold">{row.status ? '✅ Validé' : '⚠️ En attente'}</td>
      <td>{row.lastname.toUpperCase()}<br/>{row.firstname}</td>
      <td>{row.email}<br/>{row.phoneNumber}</td>
      <td className="capitalize" >{row.nationality}</td>
      <td>
        {
          row.status
            ? <ButtonComponent label="Éditer" onClick={() => openModal(index)}></ButtonComponent>
            : <ButtonComponent className="check" label="Vérifier"
                               onClick={() => openModal(index)}></ButtonComponent>
        }
      </td>
    </RowComponent>
  );
};

export default UserRowComponent;
