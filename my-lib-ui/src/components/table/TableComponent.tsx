import React from 'react';

interface DataTableProps {
  columns: string[];
  children: React.ReactNode;
}

const TableComponent: React.FC<DataTableProps> = ({columns, children}) => {
  return (
    <div>
      <table className="my-lib-ui-table">
        <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
