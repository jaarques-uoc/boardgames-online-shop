// Uncomment this line for localhost testing
const API_GATEWAY_URL = 'http://localhost:7000';

// Uncomment this line for heroku deployment
// const API_GATEWAY_URL = 'https://api-gateway-ws.herokuapp.com';

const URLS = {
    CUSTOMERS_WS: `${API_GATEWAY_URL}/customers-ws`,
    PRODUCTS_WS: `${API_GATEWAY_URL}/products-ws`,
    ORDERS_WS: `${API_GATEWAY_URL}/orders-ws`,
    CARTS_WS: `${API_GATEWAY_URL}/carts-ws`,
};

export {URLS, API_GATEWAY_URL};