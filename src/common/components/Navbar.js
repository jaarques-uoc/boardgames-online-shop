import React from 'react';

const Navbar = ({}) =>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a href="/" className="navbar-brand d-flex w-50 mr-auto">Boardgames online shop</a>
        <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
            <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" href="#">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Cart</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">List of users</a>
                </li>
            </ul>
        </div>
    </nav>;

export {Navbar};