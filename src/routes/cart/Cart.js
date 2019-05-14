import React from 'react';
import {getCart, updateCartItem} from "./cartDAO";
import {OrderItem} from "../../common/OrderItem";

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
            .then(cart => this.setState({cart}))
            .finally(() => this.setState({loading: false}));
    };

    calculateTotalPrice = items => items
        .reduce((acc, item) => acc + item.quantity * item.productDto.price, 0);

    loadCart = () => getCart(this.state.userId)
        .then(cart => this.setState({cart}));

    render() {
        return (
            <div className="container content-padding">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <h1>Cart</h1>
                        {this.state.cart && this.state.cart.orderItemDtos &&
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