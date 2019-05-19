import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
import {App} from "./App";
import {MyOrders} from "./routes/orders/MyOrders";
import {AllOrders} from "./routes/orders/AllOrders";
import {Provider} from 'react-redux'
import {configureStore} from './store';
import {Logout} from "./routes/login/Logout";

const routing = (
    <Router>
        <Navbar/>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/orders/:id" component={Order}/>
            <Route path="/orders" component={AllOrders}/>
            <Route path="/myOrders" component={MyOrders}/>
            <Route path="/users/:id" component={User}/>
            <Route path="/users" component={Users}/>
            <Route path="/products/:id" component={Product}/>
            <Route exact path="/" component={App}/>
            <Route component={Error404}/>
        </Switch>
    </Router>
);

ReactDOM.render(
    <Provider store={configureStore()}>
        {routing}
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
