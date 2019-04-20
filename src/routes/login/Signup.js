import React from 'react';

class Signup extends React.Component {

    state = {
        email: '',
        password: '',
        repeatPassword: ''
    };

    onClick = () => {
        return false;
    };

    onChange = event => this.setState({
        [event.target.id]: event.target.value
    });

    validateForm = () => !!this.state.inputEmail && !!this.state.inputPassword;

    render() {
        return (
            <div className="container content-padding">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <form>
                            <div className="form-group">
                                <label htmlFor="inputEmail">Email address</label>
                                <input type="email"
                                       className="form-control"
                                       id="inputEmail"
                                       aria-describedby="emailHelp"
                                       onChange={this.onChange}
                                       placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword">Password</label>
                                <input type="password"
                                       className="form-control"
                                       id="inputPassword"
                                       onChange={this.onChange}
                                       placeholder="Password"/>
                            </div>
                            <button type="button"
                                    disabled={!this.validateForm()}
                                    onClick={this.onClick}
                                    className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export {Signup};