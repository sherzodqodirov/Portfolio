import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cardproduct from "../../components/Cardproduct";
import { createproduct } from "../../redux/getallproduct/createproduct";
import { fetchgetproduct } from "../../redux/getallproduct/getallaction";
const HomePage = () => {
  
  const { product, isloading, error } = useSelector(
    (state) => state.productdata
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchgetproduct());
  }, []);

  const handlesub=(e)=>{
       e.preventDefault();
       const productobj={
        productname:e.target.product.value,
        status:false
      }
       dispatch(createproduct(productobj))
       e.target.reset();
  }

  
  return (
    <div>
      <div className="row">
        <form onSubmit={handlesub} className="col s12">
          <div className="row">
            <div className="input-field  col m6 s8 offset-m2  ">
              <input required id="product" type="text" className="validate" />
              <label htmlFor="product">Product name</label>
            </div>
            <div style={{ marginTop: "25px" }} className="col m2 s2">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                добавить
              </button>
            </div>
          </div>
        </form>
        {isloading ? (
           <div className="progress">
           <div className="indeterminate"></div>
       </div>
        ) : error === null ? (
          product?.allproduct?.map((item, key) => <Cardproduct  key={key} data={item}/>)
        ) : (
          <h6>{error}</h6>
        )}
      </div>
    </div>
  );
};

export default HomePage;
