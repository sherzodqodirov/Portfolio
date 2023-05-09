import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategorythunk } from "../redux/categorySlice";
import { getProductIdthunk } from "../redux/productidSlice";
import Tabsitem from "./Tabsitem";
import Spiner from "./Spiner";
const Tabs = () => {

  const dispatch = useDispatch();

  const { data, isloading, iserror } = useSelector(
    (state) => state.categorTitle
  );


  const [tabvalue, setTabvalue] = useState(null);

  useEffect(() => {
    dispatch(getAllCategorythunk());
  }, []);

 
  useEffect(()=>{
    if(data){
      setTabvalue(data[0]?.id)
    }

  },[data])

  const clickById = useCallback((id) => {
    setTabvalue(id);
  },[tabvalue])

  
  return (
    <>
      {isloading ? (
        <Spiner/>
      ) : iserror ? (
        <h1>Error</h1>
      ) : (
        <>
        <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
            {data?.map((item, key) => (
              <li key={key} className="nav-item" role="presentation">
                <button
                  className={`nav-link ${key == 0 && "active"}`}
                  data-bs-toggle="tab"
                  type="button"
                  role="tab"
                  onClick={() => clickById(item.id)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </div>
          </nav>
          <Tabsitem tabvalue={tabvalue}/>
        </>
      )}
    </>
  );
};

export default Tabs;
