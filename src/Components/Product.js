import React, {useContext, useState} from "react";
import ProductContext from "./ProductContext";
import "./Product.css"

const Product = ({title, imageUrl, body}) => {
    const store = useContext(ProductContext);
    const [product, setProduct] = useState({
        name: title,
        description: body
    });

    const add_to_cart = (title = "", body = "") => {
        store.addProduct(product);
        setProduct({name: title, description: body});
    };

    return (
        <div className="product-container">

            <div className="image-container">

                <img src={imageUrl} alt=""/>
            </div>
            <div>
                <div className="product-title">
                    <h3>{title}</h3>
                </div>
                <div className="product-body">
                    {body}
                    <p></p>
                </div>
                <div className="btn">
                    <button onClick={() => add_to_cart(title, body)}>Dodaj do koszyka</button>

                </div>
            </div>
        </div>
    );
};

export default Product;