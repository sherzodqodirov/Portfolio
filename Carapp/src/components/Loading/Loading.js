import React from "react";
import './load.scss';

const Loading = () => {
  return (
    <div className="lds-grid ">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
