import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
  > & { 
    label: string,
  };

const onFocus = (e: any) => {
  e.target.parentElement.classList.add('my-lib-ui-input-text-focus');
};

const onBlur = (e: any) => {
  e.target.parentElement.classList.remove('my-lib-ui-input-text-focus');
}

const InputComponent: React.FC<Props> = (props) => {
  return (
    <div className="my-lib-ui-form-field my-lib-input-text">
      <input onBlur={onBlur} onFocus={onFocus} id={props.id} {...props} className="my-lib-ui-input" />
      <label htmlFor={props.id} className={"my-lib-ui-label"}>{props.label}</label>
    </div>
  );
};

export default InputComponent;
