import * as React from "react";
import "./Select.scss";

interface Props {}

export type SelectProps = Readonly<Props>;

export const Select: React.FC<Props> = (props) => {
  return <div className="Select">Select component works!</div>;
};
