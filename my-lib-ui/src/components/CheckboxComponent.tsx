import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
  > & { 
    label: string,
  };

const CheckboxComponent: React.FC<Props> = (props) => {
  return (
    <div className="my-lib-ui-checkbox">
      <input className={`my-lib-ui-checkbox-input ${props.className}`} type="checkbox" id={props.id} {...props}  />
      <label className="my-lib-ui-checkbox-label" htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default CheckboxComponent;
