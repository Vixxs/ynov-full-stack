import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string };

const RadioButtonComponent: React.FC<Props> = ({className, ...props}) => {
  return (
    <div className={["my-lib-ui-radio", className].join(" ")}>
      <input className="my-lib-ui-radio-input" type="radio" id={props.id} {...props} />
      <label className="my-lib-ui-radio-label" htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default RadioButtonComponent;
