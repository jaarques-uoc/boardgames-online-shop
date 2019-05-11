

const calculateTotalPrice = products => products
    .reduce((acc, item) => acc + item.quantity * item.product.price, 0);

export {calculateTotalPrice};