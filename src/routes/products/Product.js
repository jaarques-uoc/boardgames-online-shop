import React from 'react';
import {getProduct} from "./productsDAO";
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

class ProductComponent extends React.Component {
    constructor(props) {
        super(props);

        this.loadProduct();
    }

    state = {
        product: undefined,
        loading: false,
        alerts: {
            success: resetAlert(),
            error: resetAlert()
        }
    };

    loadProduct = () => getProduct(this.props.match.params.id)
        .then(product => this.setState({product}));

    addProduct = () => {
        this.setState({loading: true});

        incrementCartItem(this.props.sessionCustomer.id, this.state.product)
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
                            <img src={product.imageUrl} alt=""/>
                        </div>
                        <div className="col-4 d-flex align-items-start flex-column">
                            <div className="mb-auto p-2">
                                <h1 className="product-info-padding">{product.name}</h1>
                                <h5 className="product-info-padding">{product.price} €</h5>
                                <div dangerouslySetInnerHTML={{ __html: product.description }} />
                            </div>
                            <div className="p-2">
                                {this.isLoggedIn() && 
                                    <button type="button"
                                            className="btn btn-primary"
                                            disabled={this.state.loading || !this.isLoggedIn()}
                                            onClick={this.addProduct}>
                                        Add to cart
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    ...state.sessionReducer
});

const Product = connect(mapStateToProps)(ProductComponent);

export {Product};