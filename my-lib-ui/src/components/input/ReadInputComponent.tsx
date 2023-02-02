import React from "react";

type Props = {
  label: string,
  value: string,
  capitalize?: boolean,
};
const ReadInputComponent: React.FC<Props> = ({label, value, capitalize}) => {
  return (
    <div className={(capitalize ? "capitalize" : "") + " my-lib-ui-read-input"}>
      <label>{label}</label>
      <span>{value}</span>
    </div>
  );
};

export default ReadInputComponent;
