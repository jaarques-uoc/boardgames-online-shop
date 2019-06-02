import React from 'react';
import {getUser} from "./usersDAO";

class User extends React.Component {
    constructor(props) {
        super(props);

        this.loadUser();
    }

    state = {
        user: undefined
    };

    loadUser = () => getUser(this.props.match.params.id)
        .then(user => this.setState({user}));

    render() {
        const {user} = this.state;

        return (
            <div className="container content-padding">
                <div>test2</div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1>User {this.props.match.params.id}</h1>
                        {user &&
                        <div className="col-12">
                            <FieldView label="User id" value={user.id}/>
                            <FieldView label="Email address" value={user.email}/>
                            <FieldView label="Full name" value={user.fullName}/>
                            <FieldView label="Address" value={user.address}/>
                            <FieldView label="Country" value={user.country}/>
                            <FieldView label="Registration date" value={user.date}/>
                        </div>
                        }
                    </div>
                </div>
            </div>
        );
    };
}

const FieldView = ({label, value}) =>
    <div className="form-group row">
        <label className="col-sm-3 col-form-label">{label}</label>
        <label className="col-sm-9 col-form-label">{value}</label>
    </div>;

export {User};