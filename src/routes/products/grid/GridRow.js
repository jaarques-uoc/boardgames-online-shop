import React from 'react';
import {GridItem} from "./GridItem";

const GridRow = ({productsRow, addProduct}) =>
    <div className="row grid-row">
        {productsRow.map((product, key) => <GridItem product={product} addProduct={addProduct} key={key}/>)}
    </div>;

export {GridRow};