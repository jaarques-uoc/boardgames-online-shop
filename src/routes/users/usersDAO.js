import {doGet} from "../../common/helperDAO";
import {URLS} from "../../common/urls";

const fetchUsers = () => doGet(`${URLS.CUSTOMERS_WS}/customers/`)
    .catch(e => console.log(`Error when retrieving users: ${e}`));

const getUser = id => doGet(`${URLS.CUSTOMERS_WS}/customers/${id}`)
    .catch(e => console.log(`Error when retrieving user ${id}: ${e}`));

export {fetchUsers, getUser};