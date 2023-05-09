import React, { useEffect } from "react";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { useDispatch, useSelector } from "react-redux";
import { getProductStatusthunk } from "../redux/productStatusSlice";
import Spiner from "./Spiner";
import { BASE_URL, previewimg } from "../service/apiUrl";

const RecommendedProduct = () => {
  const dispatch = useDispatch();
  const { data, isloading, iserror } = useSelector(
    (state) => state.productstatus
  );

  useEffect(() => {
    dispatch(getProductStatusthunk());
  }, []);

  return (
        <section className="padding-y">
          <div className="container">
            <Zoom>
              <header className="section-heading">
                <h3 className="section-title">Recommended</h3>
              </header>
            </Zoom>
            <div className="row">
                {isloading ? <Spiner/> :(
                    iserror ? <h4>Error</h4>:(
                        data?.map((item,key)=>(
                        <Flip key={key} top>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                          <figure className="card-product-grid p-3">
                            <a href="#" className="img-wrap rounded bg-gray-light">
                              <img
                                height="250"
                                className="mix-blend-multiply"
                                src={BASE_URL+previewimg+item?.images[0]?.hashId}
                              />
                            </a>
                            <figcaption className="pt-2">
                              <a href="#" className="float-end btn btn-light btn-icon">
                                {" "}
                                <i className="fa fa-shopping-cart"></i>{" "}
                              </a>
                              <strong className="price">${item.price}</strong>
                              <a href="#" className="title text-truncate">
                                {item.name}
                              </a>
                              <small className="text-muted">{item.description}</small>
                            </figcaption>
                          </figure>
                        </div>
                      </Flip>
                        ))
                    )
                )}
            </div>
          </div>
        </section>
  );
};

export default RecommendedProduct;
