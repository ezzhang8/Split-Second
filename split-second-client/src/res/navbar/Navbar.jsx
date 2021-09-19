import React, { useContext } from 'react';

import { Link } from "react-router-dom";
import { Context } from '../pages/store'

import { useHistory } from "react-router-dom";

import './navbar.css';

export default function Navbar() {
    const [state, dispatch] = useContext(Context);

    return (
        <>
        <nav className="uk-navbar-container uk-navbar uk-box-shadow-large custom-nav black-gd" data-uk-navbar>
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    {state.room.code != undefined && (
                        <button style={{margin: "0px 0px 0px 5px", padding: "1px 10px"}} className="uk-button uk-button-default uk-margin-small-right" type="button" data-uk-toggle="target: #offcanvas-nav-primary"><span data-uk-icon="users"></span>
                        </button>
                    )}
                    <div className="uk-logo">
                        <Link to="/home">Split Second</Link>
                    </div>
                </ul>
            </div>
        </nav>

        <div id="offcanvas-nav-primary" data-uk-offcanvas="overlay: true">
            <div className="uk-offcanvas-bar uk-flex uk-flex-column">

                <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                    <li><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: user"></span>{state.user.username}</a></li>
                    <li className="uk-nav-divider"></li>
                    {state.room.users != undefined && state.room.users.map((user) => {
                        if (JSON.stringify(user) != JSON.stringify(state.user)) {
                            return ( 
                                <li><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: user"></span>{user.username + (user.host ? " (host)" : "")}</a></li>
                            )
                        }
                        
                    })}
                </ul>

            </div>
        </div>
              
        </>
    )
    
}

