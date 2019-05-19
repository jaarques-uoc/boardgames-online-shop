import React from 'react';
import {OrderItem} from "../../common/OrderItem";
import {getOrder} from "./ordersDAO";
import {sortOrderItems} from "../../common/sorting";
import {Link} from "react-router-dom";

class Order extends React.Component {
    constructor(props) {
        super(props);

        this.loadOrder();
    }

    state = {
        order: undefined
    };

    loadOrder = () => getOrder(this.props.match.params.id)
        .then(order => {
            order.orderItemDtos = sortOrderItems(order.orderItemDtos);
            this.setState({order});
        });

    render() {
        return (
            <div className="container content-padding">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1>Order {this.props.match.params.id}</h1>
                        {this.state.order && this.state.order.orderItemDtos &&
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
                            {this.state.order.orderItemDtos.map((orderItem, key) =>
                                <OrderItem orderItem={orderItem}
                                           key={key}
                                           readOnly={true}/>
                            )}
                            <tr>
                                <td colSpan="5" className="text-right">
                                    {this.state.order.amount} €
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        }
                        <h4>Status</h4>
                        {this.state.orderEvents &&
                        <table className="table">
                            <thead className="thead-light text-center">
                            <tr>
                                <th scope="col">Status</th>
                                <th scope="col">Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.orderEvents.map((orderEvent, key) =>
                                <tr className="text-center cart-item" key={`events_${key}`}>
                                    <td>{orderEvent.status}</td>
                                    <td>{orderEvent.eventDate}</td>
                                </tr>
                            )}
                            <tr>
                                <td colSpan="5" className="text-right">
                                    {this.state.order.amount} €
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

export {Order};