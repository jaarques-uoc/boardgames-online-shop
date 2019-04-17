const fetchProducts = () => [...Array(20).keys()].map(buildRandomProduct);

const buildRandomProduct = position => buildProduct(`Item name ${position}`, 'Some description 1', position + 0.34, 'https://static.cardmarket.com/img/548dd39417c935651fbd98c3ee6d5951/items/1/WAR/372131.jpg');

const buildProduct = (name, description, price, imageUrl) => ({
    name,
    description,
    price,
    imageUrl
});

export {fetchProducts};