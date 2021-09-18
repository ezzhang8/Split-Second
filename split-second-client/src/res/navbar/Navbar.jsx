import React, { Component } from 'react';

import { Link } from "react-router-dom";

import './navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav class="uk-navbar-container uk-navbar uk-box-shadow-large custom-nav black-gd" uk-navbar>
                <div class="uk-navbar-left">
                    <ul class="uk-navbar-nav">
                        <div class="uk-logo">
                            <Link to="/home">Split Second</Link>
                        </div>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default Navbar;