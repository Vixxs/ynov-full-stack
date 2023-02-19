import React from 'react';
import { CarFormData } from "../modal/type";
interface CarRowProps {
    row: CarFormData;
    index: number;
    openModal: (index: number) => void;
}
declare const CarRowComponent: React.FC<CarRowProps>;
export default CarRowComponent;
