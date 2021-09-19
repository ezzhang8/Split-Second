import React, { Component } from 'react';

import { Link } from "react-router-dom";

import './navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="uk-navbar-container uk-navbar uk-box-shadow-large custom-nav black-gd" data-uk-navbar>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <div className="uk-logo">
                            <Link to="/home">Split Second</Link>
                        </div>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default Navbar;