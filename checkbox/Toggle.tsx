import * as React from "react";
import "./Toggle.scss";

interface Props {}

export type ToggleProps = Readonly<Props>;

export const Toggle: React.FC<Props> = (props) => {
  return <div className="Toggle">Toggle component works!</div>;
};
