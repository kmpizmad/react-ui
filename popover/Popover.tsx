import * as React from "react";
import "./Popover.scss";

interface Props {}

export type PopoverProps = Readonly<Props>;

export const Popover: React.FC<Props> = (props) => {
  return <div className="Popover">Popover component works!</div>;
};
