import React, { Component } from 'react';

import Navbar from './res/navbar/Navbar';
import Home from './res/pages/home/Home';
import Planning from './res/pages/planning/Planning';
import Store from './res/pages/store';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './res/uikit/uikit.min.css';

import './res/css/custom.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    callAPI() {
        // fetch("http://localhost:9000/testAPI")
        //     .then(res => res.text())
        //     .then(res => this.setState({ apiResponse: res }))
        //     .catch(err => err);
    }

    componentDidMount() {
        this.callAPI()
    }

    render() {
        return (
            <Store>
                <Router>
                    <Navbar />
                    <div className="uk-container">
                        <Switch>
                            <Route path="/home">
                                <Home/>
                            </Route>
                            <Route path="/c/:id" children={<Planning/>}>
                                
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </Store>
        )
    }
}

export default App;
