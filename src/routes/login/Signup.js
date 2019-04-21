import React from 'react';
import {PasswordInput, TextInput} from "../../common/InputFields";

class Signup extends React.Component {

    state = {
        email: '',
        password: '',
        repeatPassword: '',
        fullName: '',
        address: '',
        country: ''
    };

    onClick = () => {
        return false;
    };

    onChange = event => this.setState({
        [event.target.id]: event.target.value
    });

    validateForm = () => !!this.state.email &&
        !!this.state.password &&
        !!this.state.repeatPassword &&
        this.state.password === this.state.repeatPassword &&
        !!this.state.fullName &&
        !!this.state.address &&
        !!this.state.country;

    render() {
        return (
            <div className="container content-padding">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <form>
                            <TextInput fieldName="email" label="Email address" onChange={this.onChange}/>
                            <PasswordInput fieldName="password" label="Password" onChange={this.onChange}/>
                            <PasswordInput fieldName="repeatPassword" label="Repeat password" onChange={this.onChange}/>
                            <TextInput fieldName="fullName" label="Full name" onChange={this.onChange}/>
                            <TextInput fieldName="address" label="Address" onChange={this.onChange}/>
                            <TextInput fieldName="country" label="Country" onChange={this.onChange}/>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <button type="button"
                                            onClick={this.onClick}
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
        );
    }
}

export {Signup};