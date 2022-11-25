import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { 
  label: string ,
  class: string
};

const ButtonComponent: React.FC<Props> = (props) => {
  const { label } = props;
  return (
    <div className="{class} my-lib-ui-button-field">
      <button className="my-lib-ui-button" {...props}>
        { label }
      </button>
    </div>
  );
};

export default ButtonComponent;
