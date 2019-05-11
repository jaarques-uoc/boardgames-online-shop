import {URLS} from "../../common/urls";
import {doGet} from "../../common/helperDAO";

const fetchOrders = () => doGet(`${URLS.ORDERS_WS}/orders/`)
    .catch(e => console.log(`Error when retrieving orders: ${e}`));

const getOrder = id => doGet(`${URLS.ORDERS_WS}/orders/${id}`)
    .catch(e => console.log(`Error when retrieving order ${id}: ${e}`));

const fetchCustomerOrders = customerId => doGet(`${URLS.ORDERS_WS}/customers/{customerId}/orders/`)
    .catch(e => console.log(`Error when retrieving orders for customer ${customerId}: ${e}`));


export {fetchOrders, fetchCustomerOrders, getOrder};