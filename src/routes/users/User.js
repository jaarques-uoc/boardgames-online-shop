import React from 'react';
import {getUser} from "./usersDAO";

const User = () => {
    const user = getUser(1);

    return (
        <div className="container content-padding">
            <div className="row justify-content-center">
                <div className="col-8">
                    <FieldView label="Email address" value={user.email}/>
                    <FieldView label="Full name" value={user.fullName}/>
                    <FieldView label="Address" value={user.address}/>
                    <FieldView label="Country" value={user.country}/>
                </div>
            </div>
        </div>
    );
};

const FieldView = ({label, value}) =>
    <div className="form-group row">
        <label className="col-sm-3 col-form-label">{label}</label>
        <label className="col-sm-9 col-form-label">{value}</label>
    </div>;

export {User};