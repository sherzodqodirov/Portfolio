import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./paging.scss";
import { totalobj } from "./totalobj";

const Paging = ({ pnum, setpnum,total }) => {

  const handledecr = () => {
    pnum > 1 && setpnum(pnum - 1);
  };

  const handleincr = () => {
    pnum < totalobj(total) && setpnum(pnum + 1);
  };

  return (
    <div className="paging d-flex justify-content-center mb-5">
      <div onClick={handledecr} className="arow arowl ">
        {"<"}
      </div>
      <h5 className="mx-3">{pnum}</h5>
      <div onClick={handleincr} className="arow arowr">
        {">"}
      </div>
    </div>
  );
};

export default Paging;
