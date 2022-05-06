import React from "react";
import "./pinform.scss";
import Navinform from "../../components/navinform/Navinform";
import Coreinform from "../../components/coreinform/Coreinform";
import Personinfotable from "../personinfo/Personinfotable";

const P_information = () => {
  return (
    <>
      <Navinform />
      {/*<Coreinform/>*/}
      <Personinfotable />
    </>
  );
};

export default P_information;
