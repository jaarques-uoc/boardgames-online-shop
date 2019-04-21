import React from 'react';
import {GridItem} from "./GridItem";

const GridRow = ({productsRow}) =>
    <div className="row grid-row">
        {productsRow.map(product => <GridItem product={product}/>)}
    </div>;

export {GridRow};