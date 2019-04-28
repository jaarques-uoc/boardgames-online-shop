import React from 'react';
import {getCart} from "./cartDAO";
import {Link} from "react-router-dom";

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
                                <CartItem cartItem={cartItem}
                                          key={key}
                                          onChange={this.onChange(cartItem.product)}
                                          disabled={this.state.loading}/>
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
};

const CartItem = ({cartItem, onChange, disabled}) => {
    const totalItemPrice = (cartItem.product.price * cartItem.quantity).toFixed(2);

    return (
        <tr className="text-center cart-item">
            <td><Link to={`/products/${cartItem.product.id}`}><img src={cartItem.product.imageUrl}/></Link></td>
            <td className="align-middle">{cartItem.product.name}</td>
            <td className="align-middle text-right">{cartItem.product.price} €</td>
            <td className="align-middle">
                <QuantityDropdown quantity={cartItem.quantity}
                                  onChange={onChange}
                                  disabled={disabled}/>
            </td>
            <td className="align-middle text-right">{totalItemPrice} €</td>
        </tr>
    );
};

const QuantityDropdown = ({quantity, onChange, disabled}) =>
    <select onChange={onChange} disabled={disabled}>
        {[...Array(11).keys()]
            .map(x => <option value={x} key={x} selected={quantity === x}>{x}</option>)}
    </select>;

export {Cart};