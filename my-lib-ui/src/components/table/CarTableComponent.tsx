import React, {useState} from 'react';
import {CarFormData} from "../modal/type";
import TableComponent from "./TableComponent";
import CarRowComponent from "../row/CarRowComponent";
import InputComponent from "../input/InputComponent";
import ButtonComponent from "../button/ButtonComponent";
import Modal from "../modal/ModalComponent";

interface CarTableProps {
  data: CarFormData[];
  onUpdate?: (data) => void;
  onDelete?: (data) => void;
}

const columns = [
  "Marque",
  "Modèle",
  "Prix",
  "Image",
  "Actions"
];

const CarTableComponent: React.FC<CarTableProps> = ({data, onUpdate, onDelete}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<CarFormData | null>(data ? data[0] : null);
  const openModal = (index: number) => {
    setSelectedRow(data[index]);
    setModalIsOpen(true);
  };

  const handleUpdate = (event) => {
    onUpdate(event);
    setModalIsOpen(false);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <TableComponent columns={columns}>
        {
          data?.length === 0
            ? (<tr>
              <td colSpan={5}>Aucune voiture</td>
            </tr>)
            : (data.map(
              (row, index) => (
                <CarRowComponent key={index} row={row} index={index} openModal={openModal}/>
              )))
        }
      </TableComponent>
      {selectedRow && (
        <Modal label="Modifier la voiture" isOpen={modalIsOpen} onRequestClose={closeModal}>
          <form onSubmit={handleUpdate}>
            <input type="hidden" name="id" value={selectedRow.id}/>
            <InputComponent name="brand" label="Marque" defaultValue={selectedRow.brand}></InputComponent>
            <InputComponent name="model" label="Modèle" defaultValue={selectedRow.model}></InputComponent>
            <InputComponent name="price" type="number" label="Prix" defaultValue={selectedRow.price}></InputComponent>
            <InputComponent name="image" label="Image" defaultValue={selectedRow.image}></InputComponent>
            <ButtonComponent label="Enregistrer les modifications" type="submit"></ButtonComponent>
            <ButtonComponent onClick={() => {onDelete(selectedRow); setModalIsOpen(false)}} className="delete" label="Supprimer la voiture" type="submit"></ButtonComponent>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default CarTableComponent;
