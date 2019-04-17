import React from 'react';
import {Link} from "react-router-dom";

const GridItem = ({product}) =>
    <div className="grid-item">
        <div><Link to={`/product/${product.id}`}><img src={product.imageUrl}/></Link></div>
        <Link to="/product">{product.name}</Link>
        <div>{product.price} €</div>
        <button type="button" className="btn btn-primary">Add to cart</button>
    </div>;

export {GridItem};