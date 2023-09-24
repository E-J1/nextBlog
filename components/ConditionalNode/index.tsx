import React from "react";

interface ConditionalNodeProps {
  condition: boolean;
  children: JSX.Element;
}

const ConditionalNode = ({ condition, children }: ConditionalNodeProps) => {
  if (condition) return <> {children} </>;

  return <></>;
};

export default ConditionalNode;
