import React from 'react';
import {Link} from "react-router-dom";

class Login extends React.Component {

    state = {
        email: '',
        password: ''
    };

    onClick = () => {
        return false;
    };

    onChange = event => this.setState({
        [event.target.id]: event.target.value
    });

    validateForm = () => !!this.state.email && !!this.state.password;

    render() {
        return (
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
                                       onChange={this.onChange}
                                       placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                       className="form-control"
                                       id="password"
                                       onChange={this.onChange}
                                       placeholder="Password"/>
                            </div>
                            <button type="button"
                                    disabled={!this.validateForm()}
                                    onClick={this.onClick}
                                    className="btn btn-primary btn-block">
                                Submit
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
                            <button type="button" className="btn btn-primary btn-block">
                                Sign up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export {Login};