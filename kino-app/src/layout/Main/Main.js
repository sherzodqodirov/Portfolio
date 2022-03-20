import React from "react";
import classes from "./Main.module.scss";

export default function Main(props) {
    
  return <div className={classes.main}>{props.children}</div>;
}
