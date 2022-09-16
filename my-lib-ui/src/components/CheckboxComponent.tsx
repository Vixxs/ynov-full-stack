import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string };

const CheckboxComponent: React.FC<Props> = (props) => {
  return <div></div>;
};

export default CheckboxComponent;
