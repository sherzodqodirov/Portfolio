import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Zoom from "react-reveal/Zoom";
import { getProductIdthunk } from "../redux/productidSlice";
import { BASE_URL, previewimg } from "../service/apiUrl";
import Spiner from "./Spiner";

const Tabsitem = ({ tabvalue }) => {
  const dispatch = useDispatch();
  const { data, isloading, iserror } = useSelector((state) => state.productId  );
  useEffect(() => {
    if (tabvalue) {
      dispatch(getProductIdthunk(tabvalue));
    }
  }, [tabvalue]);
 

  if (tabvalue != null) {
    return (
        
          <div
            className={`tab-pane`}
            id={tabvalue}
            role="tabpanel"
            tabIndex="0"
          >
            {isloading ? <Spiner/>:(
              iserror ? <h4>Error</h4>:(
                <div className="row">
                {data?.map((item2, key) => (
                  <Zoom key={key}>
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
                      <figure className="card-product-grid p-3 ">
                        <a href="#" className="img-wrap rounded bg-gray-light">
                          {/* <span className="topbar">
                           
                            <span className="badge bg-warning"> Offer </span>{" "}
                          </span> */}
                          <img
                            height="250"
                            className="mix-blend-multiply"
                            src={BASE_URL+previewimg+item2?.images[0]?.hashId}
                          />
                        </a>
                        <figcaption className="pt-2">
                          <a
                            href="#"
                            className="float-end btn btn-light btn-icon"
                          >
                            <i className="fa fa-shopping-cart"></i>{" "}
                          </a>
                          <strong className="price">${item2.price}</strong>
                          <a href="#" className="title text-truncate">
                            {item2.name}
                          </a>
                          <small className="text-muted">{item2.description}</small>
                        </figcaption>
                      </figure>
                    </div>
                  </Zoom>
                ))}
              </div> 
              )
            )}
          
          </div>
    
    );
  }
};

export default Tabsitem;
