import React from "react";
import "./Row.css";

export default function Row(props) {
  return <div className="row">{props.children}</div>;
}
