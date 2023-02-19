import React from 'react';
interface DataTableProps {
    columns: string[];
    children: React.ReactNode;
}
declare const TableComponent: React.FC<DataTableProps>;
export default TableComponent;
