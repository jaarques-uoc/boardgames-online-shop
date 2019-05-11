import React from 'react';
import {GridRow} from "./grid/GridRow";
import {fetchProducts} from "./productsDAO";

const toMatrix = (array, numCols) => {
    if (!array)
        return;

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

class Products extends React.Component {

    constructor(props) {
        super(props);

        this.loadProducts();
    }

    state = {
        products: []
    };

    loadProducts = () => fetchProducts()
        .then(products => this.setState({products}));

    render() {
        const grid = toMatrix(this.state.products, 6);

        return (
            this.state.products &&
            <div className="container-fluid content-padding">
                {
                    grid.map((gridRow, key) => <GridRow productsRow={gridRow} key={key}/>)
                }
            </div>
        );
    }
}

export {Products};