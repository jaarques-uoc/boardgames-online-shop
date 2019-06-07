import {doGet} from "./helperDAO";
import {API_GATEWAY_URL} from "./urls";

const fetchSystemHealth = () => doGet(`${API_GATEWAY_URL}/system/health`)
    .catch(e => console.log(`Error when retrieving system health: ${e}`));

export {fetchSystemHealth};