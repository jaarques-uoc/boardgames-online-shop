import {doPost} from "../../common/helperDAO";
import {URLS} from "../../common/urls";

const login = customer => doPost(`${URLS.CUSTOMERS_WS}/login/`, customer)
    .catch(e => {
        console.log(`Error when loging in user ${customer.email}: ${e}`);
        throw '';
    });

const signup = customer => doPost(`${URLS.CUSTOMERS_WS}/signup/`, customer)
    .catch(e => {
        console.log(`Error when registering user ${customer.email}: ${e}`);
        throw '';
    });

export {login, signup};