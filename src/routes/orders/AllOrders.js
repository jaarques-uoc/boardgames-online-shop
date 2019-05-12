import React from 'react';
import {Orders} from "./Orders";
import {fetchOrders} from "./ordersDAO";

const AllOrders = () => <Orders fetchOrders={fetchOrders} title='All customer orders'/>

export {AllOrders}