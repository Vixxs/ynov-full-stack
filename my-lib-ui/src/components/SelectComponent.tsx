import React from "react";

type Props = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

const SelectComponent: React.FC<Props> = (props) => {
  return (
    <div className="my-lib-ui-form-field">
      <select className="my-lib-ui-select" {...props}>
        {props.children}
      </select>
    </div>
  );
};

export default SelectComponent;
