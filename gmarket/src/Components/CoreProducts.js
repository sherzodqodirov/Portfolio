import React from 'react';
import aplesinimg from "../image/aplesin.png";
import shopcard from "../icons/shopcard.svg"
import recipescard from "../icons/recipescard.svg"
import ProductCarusel from "./ProductCarusel";
import Addproduct from "./Addproduct";
const CoreProducts = () => {
    return (
        <div className="coreproducts">
            <div className="aplesin-header d-flex">
                <div className="card card1">
                    <div className="card-body p-0">
                        <div className="imgcard"><img className="w-100" src={aplesinimg} alt="img"/></div>
                        <div className="card-text d-flex align-items-center;">
                            <h1>Wallmart store</h1>
                            <h6 className="d-flex align-items-center">
                                <div className="delicon"></div>
                                <span className="icon2 icon-infoicon"></span> Store info
                            </h6>
                            <h6 className="d-flex align-items-center">
                                <div className="delicon"></div>
                                <span className="icon2 icon-caricon"></span> Store delivery time
                            </h6>
                            <h6 className="d-flex align-items-center">
                                <div className="delicon"></div>
                                <span className="icon2 icon-savedicon"></span> Seved
                            </h6>
                            <h5><span className=" icon1 icon-staricon"></span> 4.5</h5>
                        </div>
                    </div>
                </div>
                <div className="card card2">
                    <div className="card-mini">
                        <img src={shopcard} alt="img"/>
                    </div>
                    <div className="recipescard text-center mt-5">
                        <img src={recipescard} alt="icon"/>
                    </div>
                </div>
            </div>
            <ProductCarusel/>
            <Addproduct/>

        </div>
    );
};

export default CoreProducts;
