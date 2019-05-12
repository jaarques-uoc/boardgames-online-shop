import {doGet} from "../../common/helperDAO";
import {URLS} from "../../common/urls";


const getCart = customerId => doGet(`${URLS.CARTS_WS}/customers/${customerId}/cart`)
    .catch(e => console.log(`Error when retrieving cart for user ${customerId}: ${e}`));

export {getCart};