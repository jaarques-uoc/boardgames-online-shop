import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Navbar} from "./common/Navbar";
import {Users} from "./routes/users/Users";
import {Cart} from "./routes/cart/Cart";
import {User} from "./routes/users/User";
import {Product} from "./routes/products/Product";
import {Error404} from "./routes/error/Error404";
import {Signup} from "./routes/login/Signup";
import {Login} from "./routes/login/Login";
import {Order} from "./routes/orders/Order";
import {Orders} from "./routes/orders/Orders";

const routing = (
    <Router>
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/orders/:id" component={Order}/>
                <Route path="/orders" component={Orders}/>
                <Route path="/users/:id" component={User}/>
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
