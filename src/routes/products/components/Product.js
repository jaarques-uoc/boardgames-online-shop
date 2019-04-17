import React from 'react';
import {getProduct} from "../productsDAO";

const Product = ({match}) => {
    const { params } = match;
    const product = getProduct(params.id);
    return (
        <div className="grid-item">
            <img src={product.imageUrl}/>
            <div>{product.name}</div>
            <div>{product.description}</div>
            <div>{product.price} €</div>
            <button type="button" className="btn btn-primary">Add to cart</button>
        </div>
    );
};

export {Product};