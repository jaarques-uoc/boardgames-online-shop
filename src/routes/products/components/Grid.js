import React from 'react';
import {GridRow} from "./GridRow";
import {fetchProducts} from "../productsDAO";

const toMatrix = (array, numCols) => {
    const addElementToCell = (array, x, i) => {
        const rowNumber = Math.floor(i / numCols);

        if (i % numCols === 0) {
            array[rowNumber] = [];
        }

        array[rowNumber].push(x);
    };

    const matrix = [];

    array.map((x, i) => addElementToCell(matrix, x, i));

    return matrix;

};

const Grid = ({}) => {
    const grid = toMatrix(fetchProducts(), 6);

    return (
        <React.Fragment>
            {
                grid.map(gridRow => <GridRow productsRow={gridRow}/>)
            }
        </React.Fragment>
    );
};

export {Grid};