import React from 'react';
import {TextInput} from "../../common/InputFields";
import {
    ErrorAlert,
    hideErrorAlert,
    hideSuccessAlert,
    resetAlert,
    showErrorAlert,
    showSuccessAlert,
    SuccessAlert
} from "../../common/Alert";
import {isLoggedIn} from "../../common/customerSession";
import {connect} from "react-redux";
import {createProduct} from "./productsDAO";

class ProductCreationComponent extends React.Component {

    state = {
        product: {
            name: '',
            description: '',
            price: '',
            imageUrl: ''
        },
        alerts: {
            success: resetAlert(),
            error: resetAlert()
        }
    };

    createProduct = () => createProduct(this.state.product)
        .then(product => {
            this.setState({product});
            this.showSuccessAlert();
        })
        .catch(this.showErrorAlert);

    onChange = event => this.setState({
        product: {
            ...this.state.product,
            [event.target.id]: event.target.value
        }
    });

    validateForm = () => !!this.state.product.name &&
        !!this.state.product.description &&
        !!this.state.product.price &&
        !!this.state.product.imageUrl &&
        this.isLoggedIn();

    showSuccessAlert = () => this.setState({alerts: showSuccessAlert(this.state.alerts)});

    showErrorAlert = () => this.setState({alerts: showErrorAlert(this.state.alerts)});

    hideSuccessAlert = () => this.setState({alerts: hideSuccessAlert(this.state.alerts)});

    hideErrorAlert = () => this.setState({alerts: hideErrorAlert(this.state.alerts)});

    isLoggedIn = () => isLoggedIn(this.props.sessionCustomer);

    render() {
        const {alerts} = this.state;

        return (
            <React.Fragment>
                {alerts.success.show &&
                <SuccessAlert text={`(${alerts.success.count}) The product has been created successfully!`}
                              hideAlert={this.hideSuccessAlert}/>
                }
                {alerts.error.show &&
                <ErrorAlert text={`(${alerts.error.count}) The product has not been created due to an error.`}
                            hideAlert={this.hideErrorAlert}/>
                }
                <div className="container content-padding">
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <h1>Create a new product</h1>
                            <form>
                                <TextInput fieldName="name"
                                           label="Name"
                                           disabled={alerts.success.show}
                                           onChange={this.onChange}/>
                                <TextInput fieldName="description"
                                           label="Description"
                                           disabled={alerts.success.show}
                                           onChange={this.onChange}/>
                                <TextInput fieldName="price"
                                           label="Price (in €)"
                                           disabled={alerts.success.show}
                                           onChange={this.onChange}/>
                                <TextInput fieldName="imageUrl"
                                           label="Image url"
                                           disabled={alerts.success.show}
                                           onChange={this.onChange}/>
                                <div className="form-group row">
                                    <div className="col-sm-10">
                                        <button type="button"
                                                onClick={this.createProduct}
                                                disabled={!this.validateForm() || alerts.success.show}
                                                className="btn btn-primary">
                                            Create
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-4 d-flex align-items-center align-self-center flex-column">
                            <img src={this.state.product.imageUrl} alt=""/>
                            {!this.state.product.imageUrl &&
                            <div>Image preview</div>
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    ...state.sessionReducer
});

const ProductCreation = connect(mapStateToProps)(ProductCreationComponent);

export {ProductCreation};