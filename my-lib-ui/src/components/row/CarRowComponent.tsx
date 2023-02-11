import React from 'react';
import {ButtonComponent} from "../../index";
import {CarFormData} from "../modal/type";
import RowComponent from "./RowComponent";

interface CarRowProps {
  row: CarFormData;
  index: number;
  openModal: (index: number) => void;
}

const CarRowComponent: React.FC<CarRowProps> = ({row, index, openModal }) =>
  (
    <RowComponent key={index}>
      <td>{row.brand}</td>
      <td className="bold">{row.model}</td>
      <td>{row.price}</td>
      <td><img width="50px" src={row.image} alt=""/></td>
      <td>
        <ButtonComponent className="check" label="Modifier" onClick={() => openModal(index)}/>
      </td>
    </RowComponent>
  );

export default CarRowComponent;
