import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { 
  label: string,
  type: string
 };

const InputComponent: React.FC<Props> = (props) => {
  const { label } = props;
  return (
    <div className="my-lib-ui-form-field">
      <label className="my-lib-ui-label">{label}</label>
      <input {...props} type='{ type }' className="my-lib-ui-input" />
    </div>
  );
};

export default InputComponent;
