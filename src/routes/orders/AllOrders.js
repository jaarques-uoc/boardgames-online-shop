import React from 'react';
import {Orders} from "./Orders";
import {fetchOrders} from "./ordersDAO";

const AllOrders = () => <Orders fetchOrders={fetchOrders}/>

export {AllOrders}