import React, { useState } from "react";
import "./paging.scss";

const Paging = ({pnum,setpnum}) => {
  

  const handledecr = () => {
    pnum > 1 && setpnum(pnum - 1);
  };

  const handleincr = () => {
    setpnum(pnum + 1);
  };

  return (
    <div className="paging d-flex justify-content-center">
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
