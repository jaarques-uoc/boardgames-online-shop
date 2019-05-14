import {URLS} from "../../common/urls";
import {doGet} from "../../common/helperDAO";

const fetchProducts = () => doGet(`${URLS.PRODUCTS_WS}/products/`)
    .catch(e => {
        console.log(`Error when retrieving productss: ${e}`);
        throw '';
    });

const getProduct = id => doGet(`${URLS.PRODUCTS_WS}/products/${id}`)
    .catch(e => {
        console.log(`Error when retrieving product ${id}: ${e}`);
        throw '';
    });

export {fetchProducts, getProduct};