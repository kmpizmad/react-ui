import * as React from "react";
import "./Snackbar.scss";

interface Props {}

export type SnackbarProps = Readonly<Props>;

export const Snackbar: React.FC<Props> = (props) => {
  return <div className="Snackbar">Snackbar component works!</div>;
};
