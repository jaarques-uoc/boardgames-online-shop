import {doGet, doPost} from "../../common/helperDAO";
import {URLS} from "../../common/urls";

const getCartUrl = customerId => `${URLS.CARTS_WS}/customers/${customerId}/carts/current`;

const getCart = customerId => doGet(getCartUrl(customerId))
    .catch(e => {
        console.log(`Error when retrieving cart for user ${customerId}: ${e}`);
        throw '';
    });

const updateCartItem = (customerId, cartItem) => doPost(`${getCartUrl(customerId)}/items`, cartItem)
    .catch(e => {
        console.log(`Error when updating cart for user ${customerId}: ${e}`);
        throw '';
    });

const incrementCartItem = (customerId, cartItem) => doPost(`${getCartUrl(customerId)}/items/increment`, cartItem)
    .catch(e => {
        console.log(`Error when updating cart for user ${customerId}: ${e}`);
        throw '';
    });

const checkoutCart = customerId => doPost(`${URLS.CARTS_WS}/customers/${customerId}/carts/current/checkout`, {})
    .catch(e => {
        console.log(`Error during checkout for user ${customerId}: ${e}`);
        throw '';
    });

export {getCart, updateCartItem, incrementCartItem, checkoutCart};