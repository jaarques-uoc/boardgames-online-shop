import React from 'react';
import {GridRow} from "./grid/GridRow";
import {fetchProducts} from "./productsDAO";
import {incrementCartItem} from "../cart/cartDAO";
import {
    ErrorAlert,
    hideErrorAlert,
    hideSuccessAlert,
    resetAlert,
    showErrorAlert,
    showSuccessAlert,
    SuccessAlert
} from "../../common/Alert";
import {connect} from "react-redux";
import {isLoggedIn} from "../../common/customerSession";

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

class ProductsComponent extends React.Component {

    constructor(props) {
        super(props);

        this.loadProducts();
    }

    state = {
        products: [],
        loading: false,
        alerts: {
            success: resetAlert(),
            error: resetAlert()
        },
    };

    loadProducts = () => fetchProducts()
        .then(products => this.setState({products}));


    addProduct = product => {
        this.setState({loading: true});

        incrementCartItem(this.props.sessionCustomer.id, product)
            .then(this.showSuccessAlert)
            .catch(this.showErrorAlert)
            .finally(() => this.setState({loading: false}));
    };

    showSuccessAlert = () => this.setState({alerts: showSuccessAlert(this.state.alerts)});

    showErrorAlert = () => this.setState({alerts: showErrorAlert(this.state.alerts)});

    hideSuccessAlert = () => this.setState({alerts: hideSuccessAlert(this.state.alerts)});

    hideErrorAlert = () => this.setState({alerts: hideErrorAlert(this.state.alerts)});

    isLoggedIn = () => isLoggedIn(this.props.sessionCustomer);

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
                                     disabled={this.state.loading || !this.isLoggedIn()}
                                     key={key}/>)
                    }
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    ...state.sessionReducer
});

const Products = connect(mapStateToProps)(ProductsComponent);

export {Products};