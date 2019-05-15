import React from 'react';
import {getCart, updateCartItem} from "./cartDAO";
import {OrderItem} from "../../common/OrderItem";
import {sortOrderItems} from "../../common/sorting";
import {createOrder} from "../orders/ordersDAO";

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.loadCart();
    }

    state = {
        cart: undefined,
        loading: false,
        userId: 12345678
    };

    onChange = item => event => {
        this.setState({loading: true});

        const cartItem = {
            productDto: item,
            quantity: event.target.value
        };

        updateCartItem(this.state.userId, cartItem)
            .then(this.saveCartState)
            .finally(() => this.setState({loading: false}));
    };

    calculateTotalPrice = items => items
        .reduce((acc, item) => acc + item.quantity * item.productDto.price, 0);

    loadCart = () => getCart(this.state.userId)
        .then(this.saveCartState);

    saveCartState = cart => {
        cart.orderItemDtos = sortOrderItems(cart.orderItemDtos);
        this.setState({cart});
    };

    createOrder = () => createOrder(this.state.cart, this.state.userId)
        .then(() => {
            console.log("redirect to success page")
            this.setState({cart: {}})
        })
        .catch(() => console.log("Show alert error"));

    isCartEmpty = () => !(this.state.cart && this.state.cart.orderItemDtos);

    render() {
        return (
            <div className="container content-padding">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <div className="d-flex">
                            <div className="p-2">
                                <h1>Cart</h1>
                            </div>
                            <div className="ml-auto p-2">
                                <button type="button"
                                        className="btn btn-primary"
                                        onClick={this.createOrder}
                                        disabled={this.isCartEmpty() || this.state.loading}>
                                    Create order
                                </button>
                            </div>
                        </div>
                        {!this.isCartEmpty() &&
                        <table className="table">
                            <thead className="thead-light text-center">
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.cart.orderItemDtos.map((cartItem, key) =>
                                <OrderItem orderItem={cartItem}
                                           key={key}
                                           onChange={this.onChange(cartItem.productDto)}
                                           disabled={this.state.loading}
                                           readOnly={false}/>
                            )}
                            <tr>
                                <td colSpan="5" className="text-right">
                                    {this.calculateTotalPrice(this.state.cart.orderItemDtos).toFixed(2)} €
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export {Cart};