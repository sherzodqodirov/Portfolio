import React, { useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchgetproduct } from "../../redux/getallproduct/getallaction";
const HomePage = () => {
  
  const { product, isloading, error } = useSelector(
    (state) => state.productdata
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchgetproduct());
  }, []);

  return (
    <div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field  col m6 s8 offset-m2  ">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Product name</label>
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
          <div>Loading</div>
        ) : error === null ? (
          product.allproduct.map((item, key) => (
            <div key={key} className="row">
              <div className="col s12 m6 offset-m2 itemproduct">
                <h6>{item.productname}</h6>
                <div className="btnbox">
                  <div className="sell">sell</div>
                  <div style={{ cursor: "pointer" }}>
                    {" "}
                    <AiFillDelete color="red" size={25} />{" "}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h6>{error}</h6>
        )}
      </div>
    </div>
  );
};

export default HomePage;
