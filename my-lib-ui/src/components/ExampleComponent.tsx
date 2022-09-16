import React, { useEffect } from "react";

interface Props {
  text: string;
}

const ExampleComponent: React.FC<Props> = ({ text }: Props) => {
  useEffect(() => {
    console.log("changes");
  });
  return <div className="test">Example Component: {text}</div>;
};

export default ExampleComponent;
