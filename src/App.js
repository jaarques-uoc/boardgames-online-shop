import React, {Component} from 'react';
import './App.css';
import {Navbar} from "./common/components/Navbar";
import {Grid} from "./routes/products/components/Grid";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Grid/>
            </React.Fragment>
        );
    }
}

export default App;
