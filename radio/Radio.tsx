import * as React from "react";
import "./Radio.scss";

interface Props {}

export type RadioProps = Readonly<Props>;

export const Radio: React.FC<Props> = (props) => {
  return <div className="Radio">Radio component works!</div>;
};
