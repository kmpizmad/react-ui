import * as React from "react";
import "./Dropdown.scss";

interface Props {}

export type DropdownProps = Readonly<Props>;

export const Dropdown: React.FC<Props> = (props) => {
  return <div className="Dropdown">Dropdown component works!</div>;
};
