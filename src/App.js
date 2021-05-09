import Store from "./Components/Store";
import Product from "./Components/Product";
import Cart from "./Components/Cart";

import "./App.css";

function App() {
    return (
        <Store>
            <h3>Produkty</h3>
            <div className="products">

                <Product
                    title='Laptop 1'
                    imageUrl='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oYjc?ver=e1aa'
                    body='More info of a product'
                />
                <Product
                    title='Laptop 2'
                    imageUrl='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oYjc?ver=e1aa'
                    body='More info of a product'
                />
                <Product
                    title='Laptop 3'
                    imageUrl='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oYjc?ver=e1aa'
                    body='More info of a product'
                />
            </div>
            <div className="carts">
                <Cart/>
            </div>

        </Store>
    );
}

export default App;