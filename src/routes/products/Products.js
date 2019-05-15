import React from 'react';
import {GridRow} from "./grid/GridRow";
import {fetchProducts} from "./productsDAO";
import {incrementCartItem} from "../cart/cartDAO";
import {
    ErrorAlert,
    hideErrorAlert,
    hideSuccessAlert, resetAlert,
    showErrorAlert,
    showSuccessAlert,
    SuccessAlert
} from "../../common/Alert";

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
        products: [],
        alerts: {
            success: resetAlert(),
            error: resetAlert()
        },
    };

    loadProducts = () => fetchProducts()
        .then(products => this.setState({products}));


    addProduct = product => incrementCartItem(12345678, product)
        .then(this.showSuccessAlert)
        .catch(this.showErrorAlert);

    showSuccessAlert = () => this.setState({alerts: showSuccessAlert(this.state.alerts)});

    showErrorAlert = () => this.setState({alerts: showErrorAlert(this.state.alerts)});

    hideSuccessAlert = () => this.setState({alerts: hideSuccessAlert(this.state.alerts)});

    hideErrorAlert = () => this.setState({alerts: hideErrorAlert(this.state.alerts)});

    render() {
        const grid = toMatrix(this.state.products, 6);
        const {alerts} = this.state;

        return (
            this.state.products &&
            <React.Fragment>
                {alerts.success.show &&
                <SuccessAlert text={`(${alerts.success.count}) The product has been added successfully!`}
                              hideAlert={this.hideSuccessAlert}/>
                }
                {alerts.error.show &&
                <ErrorAlert text={`(${alerts.error.count}) The product has not been added due to an error.`}
                            hideAlert={this.hideErrorAlert}/>
                }
                <div className="container-fluid content-padding">
                    {
                        grid.map((gridRow, key) =>
                            <GridRow productsRow={gridRow}
                                     addProduct={this.addProduct}
                                     key={key}/>)
                    }
                </div>
            </React.Fragment>
        );
    }
}

export {Products};