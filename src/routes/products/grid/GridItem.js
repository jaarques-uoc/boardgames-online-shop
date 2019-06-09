import React from 'react';
import {Link} from "react-router-dom";

const LinkToProduct = ({children, id}) => <Link to={`/products/${id}`}>{children}</Link>;

const GridItem = ({product, addProduct, disabled, show}) =>
    <div className="col-6 col-md-2 text-center">
        <div className="grid-item">
            <div><LinkToProduct id={product.id}><img src={product.imageUrl} alt=""/></LinkToProduct></div>
            <LinkToProduct id={product.id}>{product.name}</LinkToProduct>
            <div>{product.price} €</div>
            {show &&
                <button type="button"
                        className="btn btn-primary"
                        disabled={disabled}
                        onClick={() => addProduct(product)}
                >Add to cart
                </button>
            }
        </div>
    </div>;

export {GridItem};