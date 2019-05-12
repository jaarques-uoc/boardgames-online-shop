import {doGet, doPost} from "../../common/helperDAO";
import {URLS} from "../../common/urls";

const getCartUrl = customerId => `${URLS.CARTS_WS}/customers/${customerId}/cart`;

const getCart = customerId => doGet(getCartUrl(customerId))
    .catch(e => console.log(`Error when retrieving cart for user ${customerId}: ${e}`));

const updateCart = (customerId, orderItem) => doPost(getCartUrl(customerId), orderItem)
    .catch(e => console.log(`Error when updating cart for user ${customerId}: ${e}`));

export {getCart, updateCart};