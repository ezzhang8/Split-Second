import React, { Component } from 'react';

import Navbar from './res/navbar/Navbar';
import Home from './res/pages/home/Home';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './res/uikit/uikit.min.css';
import './res/css/custom.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI()
    }

    render() {
        return (
            <>
                <Router>
                    <Navbar />
                    <div className="uk-container">
                        <Switch>
                            <Route path="/">
                                <Home/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </>
        )
    }
}

export default App;
