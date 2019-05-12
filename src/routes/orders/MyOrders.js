import React from 'react';
import {Orders} from "./Orders";
import {fetchCustomerOrders} from "./ordersDAO";

const MyOrders = () => <Orders fetchOrders={() => fetchCustomerOrders(123324234)}
                               title='My orders'/>;

export {MyOrders}