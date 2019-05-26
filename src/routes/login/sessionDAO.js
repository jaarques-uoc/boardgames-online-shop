import {doPost, doPostWithQueryParams} from "../../common/helperDAO";
import {URLS} from "../../common/urls";

const signup = customer => doPost(`${URLS.CUSTOMERS_WS}/signup/`, customer)
    .catch(e => {
        console.log(`Error when registering user ${customer.email}: ${e}`);
        throw '';
    });

const login = authenticationParams => doPostWithQueryParams(`${URLS.AUTH_WS}/oauth/token`, authenticationParams)
    .catch(e => {
        console.log(`Error when loging in user ${authenticationParams.username}: ${e}`);
        throw '';
    });

export {signup, login};