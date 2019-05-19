import React from 'react';
import {GridItem} from "./GridItem";

const GridRow = ({productsRow, addProduct, disabled}) =>
    <div className="row grid-row">
        {productsRow.map((product, key) => <GridItem product={product}
                                                     addProduct={addProduct}
                                                     disabled={disabled}
                                                     key={key}/>)
        }
    </div>;

export {GridRow};