import React from 'react';
import {GridItem} from "./GridItem";

const GridRow = ({productsRow}) =>
    <div className="row grid-row">
        {productsRow.map(product => <div className="col-6 col-md-2 text-center"><GridItem product={product}/></div>)}
    </div>;

export {GridRow};