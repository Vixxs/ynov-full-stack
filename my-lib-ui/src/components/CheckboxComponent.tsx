import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
  > & { 
    label: string,
    idElement: string
  };

const CheckboxComponent: React.FC<Props> = (props) => {
  return (
    <div className="my-lib-ui-checkbox">
      <input className="my-lib-ui-checkbox-input" type="checkbox" id={props.idElement} {...props}  />
      <label className="my-lib-ui-checkbox-label" htmlFor={props.idElement}>{props.label}</label>
    </div>
  );
};

export default CheckboxComponent;
