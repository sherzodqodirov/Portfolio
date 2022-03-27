import axios from "axios";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeSelectedProduct, selectedProduct} from "../Redux/Actions/productAction";
import Loader from "./Loader";

const ProductDetails = () => {
    const product = useSelector(state => state.product)
    const {image, title, price, category, description} = product
    const {productid} = useParams();
    const dispatch = useDispatch()
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productid}`)
            .catch(error => {
                console.log("ERROR", error.message)
            })
        dispatch(selectedProduct(response.data))
    }
    useEffect(() => {
        if (productid !== "") fetchProductDetail()

        return (() => dispatch(removeSelectedProduct()))
    }, [productid])


    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <Loader/>) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img src={image} alt={title}/>
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag lable">${price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add To Card</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}
export default ProductDetails;