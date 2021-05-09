import React from "react";
import {useLocalObservable} from "mobx-react";
import ProductContext from "./ProductContext";

const Store = ({children}) => {
    const store = useLocalObservable(() => ({
        products: [],
        addProduct: product => {
            store.products.push(product);
        },
        removeProduct: product => {
            store.products = store.products.filter(i => i !== product);
        },
        get productCount() {
            return store.products.length;
        }
    }));

    return (
        <ProductContext.Provider value={store}>{children}</ProductContext.Provider>
    );
};

export default Store;