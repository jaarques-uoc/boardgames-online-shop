import React from 'react';
import {GridRow} from "./grid/GridRow";
import {fetchProducts} from "./productsDAO";

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

const Products = ({}) => {
    const grid = toMatrix(fetchProducts(), 6);

    return (
        <div className="container-fluid content-padding">
            {
                grid.map((gridRow, key) => <GridRow productsRow={gridRow} key={key}/>)
            }
        </div>
    );
};

export {Products};