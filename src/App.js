import {Products} from "./routes/products/Products";
import React from "react";
import {fetchSystemHealth} from "./common/SystemHealthDAO";
import {Loading} from "./Loading";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        systemStatus: undefined
    };

    loadSystemStatus = () => fetchSystemHealth()
        .then(systemStatus => this.setState({systemStatus}));

    isSystemUp = () => this.state.systemStatus &&
        this.state.systemStatus.services
            .map(service => service.status)
            .reduce((acc, status) => status === 'UP' && acc, true);

    render() {
        return (
            <React.Fragment>
                {this.isSystemUp() ? <Products/> : <Loading/>}
            </React.Fragment>
        );
    }
}

export {App}