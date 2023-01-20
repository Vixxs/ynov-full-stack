import React from "react";

type Props = {
  label: string,
  value: string,
};
const ReadInputComponent: React.FC<Props> = ({label, value}) => {
  return (
<<<<<<< HEAD
    <div className="my-lib-ui-read-input">
      <label>{label}</label>
=======
    <div className="my-lib-read-input">
      <label >{label}</label>
>>>>>>> 18be1a2 (fix: update admin page and table/modal)
      <span>{value}</span>
    </div>
  );
};

export default ReadInputComponent;
