import React from 'react';
import {getCart, updateCartItem} from "./cartDAO";
import {OrderItem} from "../../common/OrderItem";
import {sortOrderItems} from "../../common/sorting";
import {createOrder} from "../orders/ordersDAO";
import {
    ErrorAlert,
    hideErrorAlert,
    hideSuccessAlert, resetAlert,
    showErrorAlert,
    showSuccessAlert,
    SuccessAlert
} from "../../common/Alert";

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.loadCart();
    }

    state = {
        cart: undefined,
        loading: false,
        userId: 12345678,
        alerts: {
            success: resetAlert(),
            error: resetAlert()
        },
        order: {}
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
        .then(order => {
            this.setState({cart: {}, order});
            this.showSuccessAlert();
        })
        .catch(this.showErrorAlert);

    isCartEmpty = () => !(this.state.cart && this.state.cart.orderItemDtos);

    showSuccessAlert = () => this.setState({alerts: showSuccessAlert(this.state.alerts)});

    showErrorAlert = () => this.setState({alerts: showErrorAlert(this.state.alerts)});

    hideSuccessAlert = () => this.setState({alerts: hideSuccessAlert(this.state.alerts)});

    hideErrorAlert = () => this.setState({alerts: hideErrorAlert(this.state.alerts)});

    render() {
        const {alerts, order} = this.state;

        return (
            <React.Fragment>
                {alerts.success.show &&
                <SuccessAlert text={`(${alerts.success.count}) The order ${order.id} has been created successfully!`}
                              hideAlert={this.hideSuccessAlert}/>
                }
                {alerts.error.show &&
                <ErrorAlert text={`(${alerts.error.count}) The order has not been created due to an error.`}
                            hideAlert={this.hideErrorAlert}/>
                }
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
            </React.Fragment>
        );
    }
}

export {Cart};