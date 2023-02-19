import React from 'react';
import { CarFormData } from "../modal/type";
interface CarTableProps {
    data: CarFormData[];
    onUpdate?: (data: any) => void;
    onDelete?: (data: any) => void;
}
declare const CarTableComponent: React.FC<CarTableProps>;
export default CarTableComponent;
