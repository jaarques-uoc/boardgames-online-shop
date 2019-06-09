import React from 'react';
import {Orders} from "./Orders";
import {fetchCustomerOrders} from "./ordersDAO";
import {connect} from "react-redux";

const MyOrdersComponent = ({sessionCustomer}) => <Orders fetchOrders={() => fetchCustomerOrders(sessionCustomer.id)}
                                                         title='My orders'/>;


const mapStateToProps = state => ({
    ...state.sessionReducer
});

const MyOrders = connect(mapStateToProps)(MyOrdersComponent);

export {MyOrders}