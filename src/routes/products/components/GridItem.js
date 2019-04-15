import React from 'react';

const GridItem = ({product}) =>
    <div className="grid-item">
        <img src={product.imageUrl}/>
        <div>{product.name}</div>
        <div>{product.price} €</div>
        <button type="button" className="btn btn-primary">Add to cart</button>
    </div>;

export {GridItem};