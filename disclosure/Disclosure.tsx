import * as React from "react";
import "./Disclosure.scss";

interface Props {}

export type DisclosureProps = Readonly<Props>;

export const Disclosure: React.FC<Props> = (props) => {
  return <div className="Disclosure">Disclosure component works!</div>;
};
