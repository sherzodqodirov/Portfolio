import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getbyidcar } from "../../redux/cartype/reduser";

const Cartype = () => {
  const { carid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getbyidcar(carid));
  }, []);

  return (
    <div className="container">
      <h6>Bosh sahifa &gt; modellari&gt;xxx turlari</h6>
      <h1 className="mb-5">Modellar turlari</h1>
      <div className="d-flex justify-content-between flex-wrap align-items-center text-center">
        
      </div>
    </div>
  );
};

export default Cartype;
