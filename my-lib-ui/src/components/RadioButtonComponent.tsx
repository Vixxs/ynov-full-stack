import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string };

const RadioButtonComponent: React.FC<Props> = (props) => {
  return (
    <div>
      <input type="radio" {...props} />
      <label htmlFor="{props.id}">{props.label}</label>
    </div>
  );
};

export default RadioButtonComponent;
