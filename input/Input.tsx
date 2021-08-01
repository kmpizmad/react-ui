import * as React from "react";
import "./Input.scss";

interface Props {}

export type InputProps = Readonly<Props>;

export const Input: React.FC<Props> = (props) => {
  return <div className="Input">Input component works!</div>;
};
