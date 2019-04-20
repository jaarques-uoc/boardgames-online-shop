import React, {Component} from 'react';
import './App.css';
import {Products} from "./routes/products/Products";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Products/>
            </React.Fragment>
        );
    }
}

export default App;
