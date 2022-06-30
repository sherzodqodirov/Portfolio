import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const Productinfo = () => {
    const {id}=useParams()
      const productid=useSelector(state => state.findid.productid)
      const isloading=useSelector(state => state.findid.isloading)
    if (isloading) return <h1 className='text-center'>Loading...</h1>
    if (!productid) return <h1 className='text-center'>No Data</h1>
    return (
        <div className='row'>
            <div className="col-xl-6 col-12">
                <div>
                    {productid.images.map((srcimg,idn)=>(
                        <img key={idn} src={srcimg} width='250' height='150'  alt="rasim"/>
                    ))}
                </div>
            </div>
            <div className="col-xl-6 col-12">
                <h3>Brand : {productid.brand}</h3>
                <h2 className='mt-4'>{productid.title}</h2>
                <p>{productid.description}</p>
                <h6>Price 💰: {productid.price} $</h6>
                <h6>Discount percentage 🎁: {productid.discountPercentage} %</h6>
                <h6>reating ⭐ : {productid.rating}</h6>
                <h6>stock 📦 : {productid.stock}</h6>
            </div>

        </div>
    );
};

export default Productinfo;
