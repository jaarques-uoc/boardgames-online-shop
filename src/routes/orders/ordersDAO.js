const fetchOrders = () => [...Array(20).keys()].map(getOrder);

const getOrder = id => ({
    id: id
});


export {fetchOrders, getOrder};