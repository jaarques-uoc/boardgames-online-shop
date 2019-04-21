import React from 'react';
import {getCart} from "./cartDAO";
import {Link} from "react-router-dom";

const Cart = () => {
    const cart = getCart();
    const totalPrice = cart.products.reduce((acc, item) => acc + item.quantity * item.product.price, 0);

    return (
        <div className="container content-padding">
            <div className="row justify-content-center">
                <div className="col-8">
                    {cart.products.map(cartItem => <CartItem cartItem={cartItem}/>)}
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    {totalPrice} €
                </div>
            </div>
        </div>
    );
};

const CartItem = ({cartItem}) => {
    const totalItemPrice = (cartItem.product.price * cartItem.quantity).toFixed(2);

    return (<div className="row">
        <div className="col-1"><Link to={`/products/${cartItem.product.id}`}>{cartItem.product.id}</Link></div>
        <div className="col-4">{cartItem.product.name}</div>
        <div className="col-1 text-right">{cartItem.quantity}</div>
        <div className="col-2 text-right">{cartItem.product.price} €</div>
        <div className="col-2 text-right">{totalItemPrice} €</div>
    </div>);
};

export {Cart};