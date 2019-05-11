import React from 'react';
import {getCart} from "./cartDAO";
import {OrderItem} from "../../common/OrderItem";

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: getCart(),
            loading: false
        }
    }

    calculateTotalPrice = () => this.state.cart.products
        .reduce((acc, item) => acc + item.quantity * item.product.price, 0);

    onChange = item => event => {
        this.setState({loading: true});
        console.log(item);
        console.log(event.target.value);
    };

    render() {
        return (
            <div className="container content-padding">
                <div className="row justify-content-center">
                    <div className="col-8">
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
                            {this.state.cart.products.map((cartItem, key) =>
                                <OrderItem cartItem={cartItem}
                                           key={key}
                                           onChange={this.onChange(cartItem.product)}
                                           disabled={this.state.loading}
                                           readOnly={false}/>
                            )}
                            <tr>
                                <td colSpan="5" className="text-right">
                                    {this.calculateTotalPrice()} €
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export {Cart};