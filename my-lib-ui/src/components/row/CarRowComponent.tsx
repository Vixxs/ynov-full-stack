import React from 'react';
import {ButtonComponent} from "../../index";
import {FormData} from "../modal/type";
import RowComponent from "./RowComponent";

interface CarRowProps {
  row: FormData;
  index: number;
  openModal: (index: number) => void;
}

const CarRowComponent: React.FC<CarRowProps> = ({row, index, openModal }) =>
  (
    <RowComponent key={index}>
      <td>{row.brand}</td>
      <td class="bold">{row.model}</td>
      <td>{row.price}</td>
      <td><img width="50px" src={row.image} alt=""/></td>
      <td>
        <ButtonComponent className="check" label="Modifier" onClick={() => openModal(index)}/>
      </td>
    </RowComponent>
  );

export default CarRowComponent;
