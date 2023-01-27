import React from 'react';

interface RowComponentProps {
  children: React.ReactNode;
}
const  RowComponent: React.FC<RowComponentProps> = ({children }) => {
  return (
    <tr className="my-lib-ui-row">
      {children}
    </tr>
  );
}
export default RowComponent;
