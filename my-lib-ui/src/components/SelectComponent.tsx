import React from "react";

type Props = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
  > & {
    label: string
  };

const onSelected = (e: any) => {
  e.target.parentElement.classList.add('selected');
}

const SelectComponent: React.FC<Props> = (props) => {
  return (
    <div className={"my-lib-ui-form-field" + props.className}>
      <label className="my-lib-ui-select-label">{props.label}</label>
      <select className="my-lib-ui-select" onChange={onSelected} {...props}>
        {props.children}
      </select>
    </div>
  );
};

export default SelectComponent;
