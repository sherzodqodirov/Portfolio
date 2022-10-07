import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getbyidcar } from "../../redux/cartype/reducer";
import Allcarcard from "../../components/Allcarcard/Allcarcard";
import Loading from "../../components/Loading/Loading";
import Cardcar from "../../components/Cardcar/Cardcar";

const Cartype = () => {
  const dispatch = useDispatch();
  const allcar = useSelector((state) => state.cartype.cartypedata);
  const isloading = useSelector((state) => state.cartype.isloading);
  const error = useSelector((state) => state.cartype.error);
  useEffect(() => {
    dispatch(getbyidcar(1));
  }, []);

  return (
    <div className="container">
      <h6>Bosh sahifa &gt; modellari&gt; turlari</h6>
      <h1 className="mb-5">Modellar turlari</h1>
        {isloading ? (
            <Loading/>
        ) : error !== null ? (
            <h4>{error}</h4>
        ) : (
            <div className="d-flex justify-content-between flex-wrap align-items-center text-center">
                {allcar.map((allcardata, idn) => (
                    <Allcarcard allcardata={allcardata} key={idn} />
                ))}
            </div>
        )}
    </div>
  );
};

export default Cartype;
