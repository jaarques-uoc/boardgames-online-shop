import React from 'react';
import {GridItem} from "./GridItem";

const GridRow = ({productsRow}) =>
    <div className="row grid-row">
        {productsRow.map((product, key) => <GridItem product={product} key={key}/>)}
    </div>;

export {GridRow};