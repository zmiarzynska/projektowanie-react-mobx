import React, {useContext} from "react";
import {useObserver} from "mobx-react";
import ProductContext from "./ProductContext";
import "./Cart.css";

const Cart = () => {
    const store = useContext(ProductContext);

    return useObserver(() => (
        <div className="container">
            <h3>Koszyk</h3>
            {store.products.map(product => (
                <div className="cart-container">
                    <strong>{product.name} </strong>
                    <p></p>
                    {product.description}
                    <p></p>
                    <button onClick={() => store.removeProduct(product)}>Usuń</button>
                </div>
            ))}
            <div>
                <p></p>
                Ilość produktów w koszyku: {store.productCount}

            </div>
        </div>
    ));
};

export default Cart;