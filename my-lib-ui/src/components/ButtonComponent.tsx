import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { 
  label: string ,
  customClass: string,
  onClick: CallableFunction,
};

const ButtonComponent: React.FC<Props> = (props) => {
  const { label, customClass, onClick } = props;
  return (
    <div className="{customClass} my-lib-ui-button-field">
      <button 
        onClick={() => {{onClick}}} 
        className="my-lib-ui-button" 
        {...props}
      >
        { label }
      </button>
    </div>
  );
};


export default ButtonComponent;
