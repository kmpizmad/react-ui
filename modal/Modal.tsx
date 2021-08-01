import * as React from "react";
import "./Modal.scss";

interface Props {}

export type ModalProps = Readonly<Props>;

export const Modal: React.FC<Props> = (props) => {
  return <div className="Modal">Modal component works!</div>;
};
