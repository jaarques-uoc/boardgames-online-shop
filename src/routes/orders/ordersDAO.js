import {getProduct} from "../products/productsDAO";

const fetchOrders = () => [...Array(20).keys()].map(getOrder);

const getOrder = id => ({
    id: id,
    amount: 123.23,
    products: [
        {
            product: getProduct(10),
            quantity: 2
        },
        {
            product: getProduct(11),
            quantity: 2
        }
    ],
    date: '2019',
    userId: id + '567'
});


export {fetchOrders, getOrder};