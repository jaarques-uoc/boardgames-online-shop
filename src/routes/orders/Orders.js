import React from 'react';
import {Link} from "react-router-dom";
import {fetchOrders} from "./ordersDAO";

const Orders = () => {
    const orders = fetchOrders();
    return (
        <div className="container content-padding">
            <div className="row justify-content-center">
                <div className="col-8">
                    {orders.map(order => <OrderRow order={order}/>)}
                </div>
            </div>
        </div>
    );
};

const OrderRow = ({order}) =>
    <div className="row">
        <div className="col-1">{order.id}</div>
        <div className="col-4"><Link to={`/user/${order.id}`}>{order.id}</Link></div>
        <div className="col-3">{order.fullName}</div>
    </div>;

export {Orders};