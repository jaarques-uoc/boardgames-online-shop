import {URLS} from "../../common/urls";
import {doGet, doPost} from "../../common/helperDAO";

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

const createProduct = product => doPost(`${URLS.PRODUCTS_WS}/products/`, product)
    .catch(e => {
        console.log(`Error when creating product ${product.name}: ${e}`);
        throw '';
    });

export {fetchProducts, getProduct, createProduct};