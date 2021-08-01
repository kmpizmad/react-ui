import * as React from "react";
import "./Button.scss";

interface Props {}

export type ButtonProps = Readonly<Props>;

export const Button: React.FC<Props> = (props) => {
  return <div className="Button">Button component works!</div>;
};
