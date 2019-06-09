const SESSION_ITEMS = {
    ID: 'id',
    EMAIL: 'email',
    ROLE: 'role'
};

const saveCustomerSession = customer => {
    customer.id && localStorage.setItem(SESSION_ITEMS.ID, customer.id);
    customer.email && localStorage.setItem(SESSION_ITEMS.EMAIL, customer.email);
    customer.role && localStorage.setItem(SESSION_ITEMS.ROLE, customer.role);
};

const removeCustomerSession = () => {
    localStorage.removeItem(SESSION_ITEMS.ID);
    localStorage.removeItem(SESSION_ITEMS.EMAIL);
    localStorage.removeItem(SESSION_ITEMS.ROLE);
};

const loadCustomerSession = () => ({
    id: localStorage.getItem(SESSION_ITEMS.ID),
    email: localStorage.getItem(SESSION_ITEMS.EMAIL),
    role: localStorage.getItem(SESSION_ITEMS.ROLE)
});

const isLoggedIn = sessionCustomer => sessionCustomer && sessionCustomer.id &&
    sessionCustomer.email && sessionCustomer.role;

export {saveCustomerSession, removeCustomerSession, loadCustomerSession, isLoggedIn}