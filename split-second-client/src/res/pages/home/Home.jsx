import React, { Component } from 'react';
import {server} from "../../api"

import socketClient  from "socket.io-client";

var socket = socketClient(server);


function createRoom() {
    socket.emit('createRoom', (res) => {
        console.log(res);
    });
}

class Home extends Component {
    render() {
        return (
            <>
                <div id="main" class="uk-card black-gd uk-align-center uk-card-default uk-card-hover">
                <div class="uk-card-header ">
                    <div class="uk-grid-small uk-flex-left" uk-grid>
                        <div class="uk-width-expand">
                            <h3 class="uk-card-title uk-margin-remove-bottom"><b class="white">Collaboratively Schedule Events</b></h3>
                            <p id="date" class="uk-text-meta uk-margin-remove-top white">Create a room or use a code.</p>
                      
                        </div>
                    </div>
                </div>
                <div class="uk-card-body uk-padding-small uk-text-center">
                    <button onClick={createRoom} class="uk-button uk-button-secondary">Create a Room</button>
                    <br/><br/>    
                    <input id="game-code" style={{width: "50%", margin: "0px 5px 0px 0px"}} class="uk-input" placeholder="6 digit code" type="text"/>
                    <a href="#join-game" class="uk-button uk-button-secondary" uk-toggle>Join</a>

                </div>
                </div>
            </>
        )
    }
}

export default Home;