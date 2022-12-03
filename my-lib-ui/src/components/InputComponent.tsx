import React from "react";
import visible from '../public/visible.png';
import hidden from '../public/hidden.png';

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

const showPassword = (e:any) => {
  let input = e.target.parentNode.querySelector('input');
  if("password" === input.type ){
    e.target.src = hidden;
    input.type = "text";
  }else{
    e.target.src = visible;
    input.type = "password";
  }
}
const focusInput = (e:any) => {
  let input = e.target.querySelector('input')
  input.focus();
}

const InputComponent: React.FC<Props> = ({className ,...props}) => {
  return (
    <div onClick={focusInput} className={["my-lib-ui-form-field", className].join(" ")}>
      <input onBlur={onBlur} onFocus={onFocus} id={props.id} {...props} className="my-lib-ui-input" />
      <label htmlFor={props.id} className={"my-lib-ui-label"}>{props.label}</label>
      {props.type == "password" &&
        <img onClick={showPassword} src={visible} alt="Show password button" />
      }
    </div>
  );
};

export default InputComponent;
