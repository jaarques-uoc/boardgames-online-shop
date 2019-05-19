import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {login} from "./sessionDAO";
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
import {saveSession} from "./sessionActions";
import {validateEmail} from "../../common/emailValidation";

class LoginComponent extends React.Component {

    state = {
        customer: {
            email: '',
            password: ''
        },
        alerts: {
            success: resetAlert(),
            error: resetAlert()
        }
    };

    login = () => login(this.state.customer)
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

    validateForm = () => !!this.state.customer &&
        !!this.state.customer.email &&
        !!this.state.customer.password &&
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
                <SuccessAlert text={`(${alerts.success.count}) You have been logged in successfully!`}
                              hideAlert={this.hideSuccessAlert}/>
                }
                {alerts.error.show &&
                <ErrorAlert text={`(${alerts.error.count}) You have not been logged in due to an error.`}
                            hideAlert={this.hideErrorAlert}/>
                }
                <div className="container content-padding">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email"
                                           className="form-control"
                                           id="email"
                                           aria-describedby="emailHelp"
                                           disabled={this.isLoggedIn()}
                                           onChange={this.onChange}
                                           placeholder="Enter email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password"
                                           className="form-control"
                                           id="password"
                                           disabled={this.isLoggedIn()}
                                           onChange={this.onChange}
                                           placeholder="Password"/>
                                </div>
                                <button type="button"
                                        disabled={!this.validateForm()}
                                        onClick={this.login}
                                        className="btn btn-primary btn-block">
                                    Log in
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="row justify-content-center login-separator">
                        <div className="col-1">
                            <hr/>
                        </div>
                        <div className="col-auto">or</div>
                        <div className="col-1">
                            <hr/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <Link to="/signup">
                                <button type="button"
                                        className="btn btn-primary btn-block"
                                        disabled={this.isLoggedIn()}>
                                    Sign up
                                </button>
                            </Link>
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

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export {Login};