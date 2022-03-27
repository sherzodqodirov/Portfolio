import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./ProductComponents.css"

const ProductComponents = () => {
    const products = useSelector(state => state.allProducts.product)
    return products.map(item => (

        <div className="four wide column " key={item.id}>
            <Link to={`/product/${item.id}`}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img className="image" src={item.image}
                                 alt={item.title}/>
                        </div>
                        <div className="content">
                            <div className="header">
                                {item.title}
                            </div>
                            <div className="meta price">$ {item.price}</div>
                            <div className="meta category">{item.category}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    ))
}
export default ProductComponents;