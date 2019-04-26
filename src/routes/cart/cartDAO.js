import {getProduct} from "../products/productsDAO";

const getCart = userId => ({
    userId: userId,
    products: [
        {
            product: getProduct(10),
            quantity: 2
        },
        {
            product: getProduct(11),
            quantity: 1
        },
        {
            product: getProduct(123),
            quantity: 3
        },
        {
            product: getProduct(84),
            quantity: 10
        }
    ]
});

export {getCart};