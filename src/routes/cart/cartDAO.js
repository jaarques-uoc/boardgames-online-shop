import {doGet, doPost} from "../../common/helperDAO";
import {URLS} from "../../common/urls";

const getCartUrl = customerId => `${URLS.CARTS_WS}/customers/${customerId}/cart`;

const getCart = customerId => doGet(getCartUrl(customerId))
    .catch(e => {
        console.log(`Error when retrieving cart for user ${customerId}: ${e}`);
        throw '';
    });

const updateCartItem = (customerId, orderItem) => doPost(`${getCartUrl(customerId)}/item`, orderItem)
    .catch(e => {
        console.log(`Error when updating cart for user ${customerId}: ${e}`);
        throw '';
    });

const incrementCartItem = (customerId, product) => doPost(`${getCartUrl(customerId)}/item/increment`, product)
    .catch(e => {
        console.log(`Error when updating cart for user ${customerId}: ${e}`);
        throw '';
    });

export {getCart, updateCartItem, incrementCartItem};