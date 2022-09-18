import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paging from "../../components/Paging/Paging";
import { getmarkapaging } from "../../redux/Categorcar/reducer";
import Loading from "../../components/Loading/Loading";
import Cardcar from "../../components/Cardcar/Cardcar";

const Home = () => {
  const dispatch = useDispatch();
  const [pnum, setpnum] = useState(1);
  const isloading = useSelector((state) => state.categor.isloading);
  const categorcar = useSelector((state) => state.categor.categorcar);
  const error = useSelector((state) => state.categor.error);
  useEffect(() => {
    dispatch(getmarkapaging(pnum));
  }, [pnum]);

  return (
    <div className="container">
      <h6>Bosh sahifa &gt; modellari</h6>
      {isloading ? (
       <Loading/>
      ) : error !== null ? (
        <h4>{error}</h4>
      ) : (
       <Cardcar categorcar={categorcar}/>
       )}
      <Paging pnum={pnum} setpnum={setpnum} />
    </div>
  );
};

export default Home;
