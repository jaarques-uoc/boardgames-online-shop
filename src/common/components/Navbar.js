import React from 'react';
import {Link} from "react-router-dom";

const Navbar = ({}) =>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a href="/" className="navbar-brand d-flex w-50 mr-auto">Boardgames online shop</a>
        <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
            <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link" to="/user">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">Cart</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Log in</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">Sign up</Link>
                </li>
            </ul>
        </div>
    </nav>;

export {Navbar};