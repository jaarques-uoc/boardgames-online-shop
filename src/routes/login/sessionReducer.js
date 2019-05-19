import {REMOVE_SESSION_CUSTOMER, SAVE_SESSION_CUSTOMER} from "./sessionActions";
import {loadCustomerSession, removeCustomerSession, saveCustomerSession} from "../../common/customerSession";

const initialState = {
    sessionCustomer: loadCustomerSession()
};

const sessionReducer = (prevState = initialState, action) => {
    switch (action.type) {

        case SAVE_SESSION_CUSTOMER: {
            saveCustomerSession(action.sessionCustomer);

            return {
                ...prevState,
                sessionCustomer: action.sessionCustomer
            };
        }

        case REMOVE_SESSION_CUSTOMER: {
            removeCustomerSession();

            return {
                ...prevState,
                sessionCustomer: {}
            };
        }
        default: {
            return prevState;
        }
    }
};

export {sessionReducer};