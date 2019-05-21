const API_GATEWAY_URL = process.env.NODE_ENV === 'production' ?
    'https://api-gateway-ws.herokuapp.com' : 'http://localhost:7000';

const URLS = {
    CUSTOMERS_WS: `${API_GATEWAY_URL}/customers-ws`,
    PRODUCTS_WS: `${API_GATEWAY_URL}/products-ws`,
    ORDERS_WS: `${API_GATEWAY_URL}/orders-ws`,
    CARTS_WS: `${API_GATEWAY_URL}/carts-ws`,
};

export {URLS, API_GATEWAY_URL};