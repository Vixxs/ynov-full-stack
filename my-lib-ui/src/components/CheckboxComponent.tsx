import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
  > & { 
    label: string,
  };

const CheckboxComponent: React.FC<Props> = ({className, ...props}) => {
  return (
    <div className={["my-lib-ui-checkbox", className].join(" ")}>
      <input className="my-lib-ui-checkbox-input" type="checkbox" {...props}  />
      <label className="my-lib-ui-checkbox-label" htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default CheckboxComponent;
