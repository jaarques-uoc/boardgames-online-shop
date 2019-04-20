import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Navbar} from "./common/components/Navbar";
import {Users} from "./routes/users/Users";
import {Cart} from "./routes/cart/Cart";
import {Profile} from "./routes/users/Profile";
import {Product} from "./routes/products/Product";
import {Error404} from "./routes/error/Error404";

const routing = (
    <Router>
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/user" component={Profile}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/users" component={Users}/>
                <Route path="/product/:id" component={Product}/>
                <Route component={Error404}/>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
