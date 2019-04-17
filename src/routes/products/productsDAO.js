const fetchProducts = () => [...Array(20).keys()].map(buildRandomProduct);

const getProduct = productId => buildRandomProduct(productId);

const buildRandomProduct = position => buildProduct(position, `Item name ${position}`, 'Some description 1', parseInt(position) + 0.34, 'https://static.cardmarket.com/img/548dd39417c935651fbd98c3ee6d5951/items/1/WAR/372131.jpg');

const buildProduct = (id, name, description, price, imageUrl) => ({
    id,
    name,
    description,
    price,
    imageUrl
});

export {fetchProducts, getProduct};