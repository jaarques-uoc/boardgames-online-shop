import {URLS} from "../../common/urls";
import {doGet} from "../../common/helperDAO";

const fetchProducts = () => doGet(`${URLS.PRODUCTS_WS}/customers/`)
    .catch(e => console.log(`Error when retrieving productss: ${e}`));

const getProduct = id => doGet(`${URLS.PRODUCTS_WS}/customers/${id}`)
    .catch(e => console.log(`Error when retrieving product ${id}: ${e}`));

export {fetchProducts, getProduct};