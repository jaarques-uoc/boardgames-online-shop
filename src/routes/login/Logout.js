import {removeSession} from "./sessionActions";
import {connect} from "react-redux";
import {SuccessAlert} from "../../common/Alert";
import React from "react";

const LogoutComponent = ({removeSession}) => {
    removeSession();

    return (
        <SuccessAlert text={`You have successfully logged out!`}/>
    );
};

const mapDispatchToProps = {removeSession};

const Logout = connect(undefined, mapDispatchToProps)(LogoutComponent);

export {Logout};