const SESSION_ITEMS = {
    ID: 'id',
    EMAIL: 'email',
    TYPE: 'type'
};

const saveCustomerSession = customer => {
    customer.id && localStorage.setItem(SESSION_ITEMS.ID, customer.id);
    customer.email && localStorage.setItem(SESSION_ITEMS.EMAIL, customer.email);
    customer.type && localStorage.setItem(SESSION_ITEMS.TYPE, customer.type);
};

const removeCustomerSession = () => {
    localStorage.removeItem(SESSION_ITEMS.ID);
    localStorage.removeItem(SESSION_ITEMS.EMAIL);
    localStorage.removeItem(SESSION_ITEMS.TYPE);
};

const loadCustomerSession = () => ({
    id: localStorage.getItem(SESSION_ITEMS.ID),
    email: localStorage.getItem(SESSION_ITEMS.EMAIL),
    type: localStorage.getItem(SESSION_ITEMS.TYPE)
});

const isLoggedIn = sessionCustomer => sessionCustomer && sessionCustomer.id &&
    sessionCustomer.email && sessionCustomer.type;

export {saveCustomerSession, removeCustomerSession, loadCustomerSession, isLoggedIn}