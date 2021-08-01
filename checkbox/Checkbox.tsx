import * as React from "react";
import "./Checkbox.scss";

interface Props {}

export type CheckboxProps = Readonly<Props>;

export const Checkbox: React.FC<Props> = (props) => {
  return <div className="Checkbox">Checkbox component works!</div>;
};
