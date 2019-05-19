import React from 'react';
import {PasswordInput, TextInput} from "../../common/InputFields";
import {
    ErrorAlert,
    hideErrorAlert,
    hideSuccessAlert,
    resetAlert,
    showErrorAlert,
    showSuccessAlert,
    SuccessAlert
} from "../../common/Alert";
import {signup} from "./sessionDAO";
import {isLoggedIn} from "../../common/customerSession";
import {saveSession} from "./sessionActions";
import {connect} from "react-redux";
import {validateEmail} from "../../common/emailValidation";

class SignupComponent extends React.Component {

    state = {
        customer: {
            email: '',
            password: '',
            repeatPassword: '',
            fullName: '',
            address: '',
            country: ''
        },
        alerts: {
            success: resetAlert(),
            error: resetAlert()
        }
    };

    signup = () => signup(this.state.customer)
        .then(customer => {
            this.props.saveSession(customer);
            this.showSuccessAlert();
        })
        .catch(this.showErrorAlert);

    onChange = event => this.setState({
        customer: {
            ...this.state.customer,
            [event.target.id]: event.target.value
        }
    });

    validateForm = () => !!this.state.customer.email &&
        !!this.state.customer.password &&
        this.state.customer.password === this.state.customer.repeatPassword &&
        !!this.state.customer.fullName &&
        !!this.state.customer.address &&
        !!this.state.customer.country &&
        validateEmail(this.state.customer.email) &&
        !this.isLoggedIn();

    showSuccessAlert = () => this.setState({alerts: showSuccessAlert(this.state.alerts)});

    showErrorAlert = () => this.setState({alerts: showErrorAlert(this.state.alerts)});

    hideSuccessAlert = () => this.setState({alerts: hideSuccessAlert(this.state.alerts)});

    hideErrorAlert = () => this.setState({alerts: hideErrorAlert(this.state.alerts)});

    isLoggedIn = () => isLoggedIn(this.props.sessionCustomer);

    render() {
        const {alerts} = this.state;

        return (
            <React.Fragment>
                {!alerts.success.show && this.isLoggedIn() &&
                <SuccessAlert text={`You have already been logged in successfully!`}
                              hideAlert={this.hideSuccessAlert}/>
                }
                {alerts.success.show &&
                <SuccessAlert text={`(${alerts.success.count}) The customer has been registered successfully!`}
                              hideAlert={this.hideSuccessAlert}/>
                }
                {alerts.error.show &&
                <ErrorAlert text={`(${alerts.error.count}) The customer has not been registered due to an error.`}
                            hideAlert={this.hideErrorAlert}/>
                }
                <div className="container content-padding">
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <form>
                                <TextInput fieldName="email"
                                           label="Email address"
                                           disabled={this.isLoggedIn()}
                                           onChange={this.onChange}/>
                                <PasswordInput fieldName="password"
                                               label="Password"
                                               disabled={this.isLoggedIn()}
                                               onChange={this.onChange}/>
                                <PasswordInput fieldName="repeatPassword"
                                               label="Repeat password"
                                               disabled={this.isLoggedIn()}
                                               onChange={this.onChange}/>
                                <TextInput fieldName="fullName"
                                           label="Full name"
                                           disabled={this.isLoggedIn()}
                                           onChange={this.onChange}/>
                                <TextInput fieldName="address"
                                           label="Address"
                                           disabled={this.isLoggedIn()}
                                           onChange={this.onChange}/>
                                <TextInput fieldName="country"
                                           label="Country"
                                           disabled={this.isLoggedIn()}
                                           onChange={this.onChange}/>
                                <div className="form-group row">
                                    <div className="col-sm-10">
                                        <button type="button"
                                                onClick={this.signup}
                                                disabled={!this.validateForm()}
                                                className="btn btn-primary">
                                            Sign up
                                        </button>
                                    </div>
                                </div>
                            </form>
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

const mapDispatchToProps = {saveSession};

const Signup = connect(mapStateToProps, mapDispatchToProps)(SignupComponent);

export {Signup};