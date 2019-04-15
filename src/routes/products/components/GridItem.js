import React from 'react';

const GridItem = ({}) =>
    <div className="grid-item">
        <img src="https://static.cardmarket.com/img/548dd39417c935651fbd98c3ee6d5951/items/1/WAR/372131.jpg"/>
        <div>Item Name</div>
        <div>3 €</div>
        <button type="button" className="btn btn-primary">Add to cart</button>
    </div>;

export {GridItem};