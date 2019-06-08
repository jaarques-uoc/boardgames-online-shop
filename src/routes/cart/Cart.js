import React from 'react';
import {checkoutCart, getCart, updateCartItem} from "./cartDAO";
import {OrderItem} from "../../common/OrderItem";
import {sortOrderItems} from "../../common/sorting";
import {
    ErrorAlert,
    hideErrorAlert,
    hideSuccessAlert,
    resetAlert,
    showErrorAlert,
    showSuccessAlert,
    SuccessAlert
} from "../../common/Alert";
import {connect} from "react-redux";

class CartComponent extends React.Component {
    constructor(props) {
        super(props);

        this.loadCart();
    }

    state = {
        cart: undefined,
        loading: false,
        alerts: {
            createOrder: {
                success: resetAlert(),
                error: resetAlert()
            },
            updateItem: {
                success: resetAlert(),
                error: resetAlert()
            }
        },
        order: {}
    };

    onChange = item => event => {
        this.setState({loading: true});

        const cartItem = {
            productDto: item,
            quantity: event.target.value
        };

        updateCartItem(this.props.sessionCustomer.id, cartItem)
            .then(cart => {
                this.saveCartState(cart);
                this.updateUpdateItemAlert(showSuccessAlert);
            })
            .catch(() => this.updateUpdateItemAlert(showErrorAlert))
            .finally(() => this.setState({loading: false}));
    };

    calculateTotalPrice = items => items
        .reduce((acc, item) => acc + item.quantity * item.productDto.price, 0);

    loadCart = () => getCart(this.props.sessionCustomer.id)
        .then(this.saveCartState);

    saveCartState = cart => {
        cart.orderItemDtos = sortOrderItems(cart.orderItemDtos);
        this.setState({cart});
    };

    createOrder = () => {
        this.setState({loading: true});

        checkoutCart(this.props.sessionCustomer.id)
            .then(order => {
                this.setState({cart: {}, order});
                this.updateCreateOrderAlert(showSuccessAlert);
            })
            .catch(() => this.updateCreateOrderAlert(showErrorAlert))
            .finally(() => this.setState({loading: false}));
    };

    isCartEmpty = () => !(this.state.cart && this.state.cart.orderItemDtos);

    updateCreateOrderAlert = alertFunction => this.updateAlert('createOrder', alertFunction);

    updateUpdateItemAlert = alertFunction => this.updateAlert('updateItem', alertFunction);

    updateAlert = (alertType, alertFunction) => {
        const alerts = {...this.state.alerts};

        alerts[alertType] = alertFunction(this.state.alerts[alertType]);

        this.setState({alerts: alerts});
    };

    render() {
        const {alerts, order} = this.state;

        return (
            <React.Fragment>
                {alerts.createOrder.success.show &&
                <SuccessAlert
                    text={`(${alerts.createOrder.success.count}) The order ${order.id} has been created successfully!`}
                    hideAlert={() => this.updateCreateOrderAlert(hideSuccessAlert)}/>
                }
                {alerts.createOrder.error.show &&
                <ErrorAlert text={`(${alerts.createOrder.error.count}) The order has not been created due to an error.`}
                            hideAlert={() => this.updateCreateOrderAlert(hideErrorAlert)}/>
                }
                {alerts.updateItem.success.show &&
                <SuccessAlert text={`(${alerts.updateItem.success.count}) The cart has been updated successfully!`}
                              hideAlert={() => this.updateUpdateItemAlert(hideSuccessAlert)}/>
                }
                {alerts.updateItem.error.show &&
                <ErrorAlert text={`(${alerts.updateItem.error.count}) The cart has not been updated due to an error.`}
                            hideAlert={() => this.updateUpdateItemAlert(hideErrorAlert)}/>
                }
                <div className="container content-padding">
                    <div className="row justify-content-center">
                        <div className="col-12">
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

const mapStateToProps = state => ({
    ...state.sessionReducer
});

const Cart = connect(mapStateToProps)(CartComponent);

export {Cart};