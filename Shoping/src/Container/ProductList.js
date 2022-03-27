import React, {useEffect} from "react";
import ProductComponents from "./ProductComponents";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setProduct} from "../Redux/Actions/productAction";

const ProductList = () => {
    const dispatch=useDispatch();
    const fetchProduct = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch(error => console.log("Error" + error.status))
          dispatch(setProduct(response.data))
    }
    useEffect(() => {
            fetchProduct()
        },
        [])
    return (
        <div className="ui grid container">
            <ProductComponents/>
        </div>
    )
}
export default ProductList;