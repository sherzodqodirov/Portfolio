import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paging from "../../components/Paging/Paging";
import { getmarkapaging } from "../../redux/Categorcar/reducer";
import Loading from "../../components/Loading/Loading";
import Cardcar from "../../components/Cardcar/Cardcar";

const Home = () => {
  const dispatch = useDispatch();
  const [pnum, setpnum] = useState(1);
    const total = useSelector((state) => state.categor.total);
    const isloading = useSelector((state) => state.categor.isloading);
  const categorcar = useSelector((state) => state.categor.categorcar);
  const error = useSelector((state) => state.categor.error);

  useEffect(() => {
    dispatch(getmarkapaging(pnum));
  }, [pnum]);

  return (
    <div className="container">
      <h6>Bosh sahifa &gt; modellari</h6>
      <h1 className="mb-5">Modellari</h1>
      {isloading ? (
        <Loading />
      ) : error !== null ? (
        <h4>{error}</h4>
      ) : (
        <div className=" d-flex justify-content-between flex-wrap align-items-center text-center">
          {categorcar.map((datacategor, idn) => (
            <Cardcar datacategor={datacategor} key={idn} />
          ))}
        </div>
      )}
      <Paging pnum={pnum} setpnum={setpnum} total={total}/>
    </div>
  );
};

export default Home;
