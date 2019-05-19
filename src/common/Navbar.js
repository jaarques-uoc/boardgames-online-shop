import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {isLoggedIn} from "./customerSession";

const NavbarComponent = ({sessionCustomer}) => {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a href="/" className="navbar-brand d-flex w-50 mr-auto">Boardgames online shop</a>
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link" to="/users/678">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/orders">All customer orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/myOrders">My Orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">Users</Link>
                    </li>
                    {!isLoggedIn(sessionCustomer) &&
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Log in</Link>
                    </li>
                    }
                    {isLoggedIn(sessionCustomer) &&
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout">Log out</Link>
                    </li>
                    }
                </ul>
            </div>
        </nav>
    );
};


const mapStateToProps = state => ({
    ...state.sessionReducer
});

const Navbar = connect(mapStateToProps)(NavbarComponent);

export {Navbar};