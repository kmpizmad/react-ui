import * as React from "react";
import "./Textarea.scss";

interface Props {}

export type TextareaProps = Readonly<Props>;

export const Textarea: React.FC<Props> = (props) => {
  return <div className="Textarea">Textarea component works!</div>;
};
