const SAVE_SESSION_CUSTOMER = 'SAVE_SESSION_CUSTOMER';
const REMOVE_SESSION_CUSTOMER = 'REMOVE_SESSION_CUSTOMER';

const saveSession = sessionCustomer => ({
    type: SAVE_SESSION_CUSTOMER,
    sessionCustomer
});

const removeSession = () => ({
    type: REMOVE_SESSION_CUSTOMER
});

export {saveSession, removeSession, SAVE_SESSION_CUSTOMER, REMOVE_SESSION_CUSTOMER};