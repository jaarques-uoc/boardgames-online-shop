import React from 'react';
import {Link} from "react-router-dom";

class Orders extends React.Component {

    constructor(props) {
        super(props);

        this.loadOrders();
    }

    state = {
        orders: []
    };

    loadOrders = () => this.props.fetchOrders()
        .then(orders => this.setState({orders}));

    render() {
        const {orders} = this.state;
        return (
            <div className="container content-padding">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <h1>{this.props.title}</h1>
                        {orders && orders.length > 0 &&
                        <table className="table">
                            <thead className="thead-light text-center">
                            <tr>
                                <th scope="col">Order id</th>
                                <th scope="col">User id</th>
                                <th scope="col">Total price</th>
                                <th scope="col">Checkout date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {orders.map((order, key) => <OrderRow order={order} key={key}/>)}
                            </tbody>
                        </table>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const OrderRow = ({order}) =>
    <tr className="text-center">
        <td><Link to={`/orders/${order.id}`}>{order.id}</Link></td>
        <td><Link to={`/users/${order.customerId}`}>{order.customerId}</Link></td>
        <td className="text-right">{order.amount} €</td>
        <td>{order.date}</td>
    </tr>;

export {Orders};