import React from 'react';
import {getProduct} from "./productsDAO";
import {incrementCartItem} from "../cart/cartDAO";
import {
    Alert,
    ErrorAlert,
    hideErrorAlert,
    hideSuccessAlert,
    resetAlert,
    showErrorAlert,
    showSuccessAlert,
    SuccessAlert
} from "../../common/Alert";

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.loadProduct();
    }

    state = {
        product: undefined,
        userId: 12345678,
        alerts: {
            success: resetAlert(),
            error: resetAlert()
        },
        showSuccessAlert: false,
        showErrorAlert: false
    };

    loadProduct = () => getProduct(this.props.match.params.id)
        .then(product => this.setState({product}));

    addProduct = () => incrementCartItem(this.state.userId, this.state.product)
        .then(this.showSuccessAlert)
        .catch(this.showErrorAlert);

    showSuccessAlert = () => this.setState({alerts: showSuccessAlert(this.state.alerts)});

    showErrorAlert = () => this.setState({alerts: showErrorAlert(this.state.alerts)});

    hideSuccessAlert = () => this.setState({alerts: hideSuccessAlert(this.state.alerts)});

    hideErrorAlert = () => this.setState({alerts: hideErrorAlert(this.state.alerts)});

    render() {
        const {product, alerts} = this.state;

        return (
            <React.Fragment>
                {alerts.success.show &&
                <SuccessAlert text={`(${alerts.success.count}) The product has been added successfully!`}
                              hideAlert={this.hideSuccessAlert}/>
                }
                {alerts.error.show &&
                <ErrorAlert text={`(${alerts.error.count}) The product has not been added due to an error.`}
                            hideAlert={this.hideErrorAlert}/>
                }
                <div className="container content-padding">
                    {product &&
                    <div className="row justify-content-center">
                        <div className="col-4 text-center">
                            <img src={product.imageUrl}/>
                        </div>
                        <div className="col-4 d-flex align-items-start flex-column">
                            <div className="mb-auto p-2">
                                <h1 className="product-info-padding">{product.name}</h1>
                                <h5 className="product-info-padding">{product.price} €</h5>
                                <div>{product.description}</div>
                            </div>
                            <div className="p-2">
                                <button type="button"
                                        className="btn btn-primary"
                                        onClick={this.addProduct}>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </React.Fragment>
        );
    }
}

export {Product};