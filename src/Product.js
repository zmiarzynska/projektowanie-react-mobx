import React from 'react'
import "./Product.css"
function Product({title,imageUrl,body}){
    return (
        <div className='product-container'>
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
            <div className="product-title">
                <h3>{title}</h3>
            </div>
            <div className="product-body">
                {body}
                <p></p>
            </div>
            <div className="btn">
                <button>
                    <a> Dodaj do koszyka</a>
                </button>
            </div>

        </div>
    )
}

export default Product