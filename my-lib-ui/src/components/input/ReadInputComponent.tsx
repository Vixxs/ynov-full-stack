import React from "react";

type Props = {
  label: string,
  value: string,
};
const ReadInputComponent: React.FC<Props> = ({label, value}) => {
  return (
    <div className="my-lib-read-input">
      <label >{label}</label>
      <span>{value}</span>
    </div>
  );
};

export default ReadInputComponent;
