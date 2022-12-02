import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { 
  label: string 
};

const ButtonComponent: React.FC<Props> = ({className, ...props}) => {
  
  return (
    <div className={["my-lib-ui-button-field", className].join(" ")}>
      <button 
        className="my-lib-ui-button"
        {...props}
      >
        { props.label }
      </button>
    </div>
  );
};


export default ButtonComponent;
