import React from 'react';
import {GridRow} from "./GridRow";
import {fetchProducts} from "../productsDAO";

const Grid = ({}) =>
    <React.Fragment>
        <GridRow productsRow={fetchProducts()}/>
    </React.Fragment>;

export {Grid};