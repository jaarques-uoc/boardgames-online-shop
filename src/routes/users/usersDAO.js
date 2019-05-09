const URLS = {
    CUSTOMERS_WS: 'api-gateway-ws.herokuapp.com/customers-ws'
};

const fetchUsers = () => fetch(`${URLS.CUSTOMERS_WS}/customers/`)
    .catch(e => console.log(`Error when retrieving users: ${e}`));

const getUser = id => fetch(`${URLS.CUSTOMERS_WS}/customers/${id}`)
    .catch(e => console.log(`Error when retrieving user ${id}: ${e}`));

export {fetchUsers, getUser};