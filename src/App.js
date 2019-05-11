import {Products} from "./routes/products/Products";
import React from "react";
import {fetchSystemHealth} from "./common/SystemHealthDAO";
import {Loading} from "./Loading";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.loadSystemStatus();
        setTimeout(() => this.setState({initialTimeoutPassed: true}), 1000);
    }

    state = {
        systemStatus: undefined,
        initialTimeoutPassed: false
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
                {this.isSystemUp() && <Products/>}
                {!this.isSystemUp() && this.state.initialTimeoutPassed && <Loading/>}
            </React.Fragment>
        );
    }
}

export {App}