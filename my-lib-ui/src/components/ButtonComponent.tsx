import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { 
  label: string ,
  customClass: string
};

const ButtonComponent: React.FC<Props> = (props) => {
  const { label, customClass } = props;
  return (
    <div className={customClass + " my-lib-ui-button-field"}>
      <button 
        className="my-lib-ui-button" 
        {...props}
      >
        { label }
      </button>
    </div>
  );
};


export default ButtonComponent;
