import React from "react";
import classes from "./Col.module.scss";

const Col = (props) => {
  return <div className={classes.col}>{props.children}</div>;
};

export default Col;
