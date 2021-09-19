import React, { useState, useContext } from 'react';
import { socket } from "../../api"
import { Context } from '../store'

import { useHistory } from "react-router-dom";


export default function Home() {
    const [state, dispatch] = useContext(Context);
    const history = useHistory();
    const [name, setName] = useState("");

    function createRoom() {
        const timezoneOffset = (new Date()).getTimezoneOffset();

        socket.emit('createRoom', { username: name, timezone: timezoneOffset }, (res) => {
            dispatch({type: 'UPDATE_USER', payload: res.user});
            dispatch({type: 'UPDATE_ROOM', payload: res.room});
            history.push("/c/"+res.room.code);

        });
    }
    
    return (
        <>
            <div id="main" className="uk-card black-gd uk-align-center uk-card-default uk-card-hover">
            <div className="uk-card-header ">
                <div className="uk-grid-small uk-flex-left" data-uk-grid>
                    <div className="uk-width-expand">
                        <h3 className="uk-card-title uk-margin-remove-bottom"><b className="white">Collaboratively Schedule Events</b></h3>
                        <p id="date" className="uk-text-meta uk-margin-remove-top white">Create a room or use a code.</p>
                    
                    </div>
                </div>
            </div>
            <div className="uk-card-body uk-padding-small uk-text-center">
                <input id="game-code" style={{width: "50%", margin: "0px 5px 0px 0px"}} onInput={e => setName(e.target.value)} value={name} className="uk-input" placeholder="Enter your nickname" type="text"/>
                <br/><br/>
                <button onClick={createRoom} className="uk-button uk-button-secondary">Create a Room</button>
            </div>
            </div>

            <button className="uk-button uk-button-default uk-margin-small-right" type="button" data-uk-toggle="target: #modal-close-react">Nice button with react</button>
            <div id="modal-close-react" data-uk-modal>
                <div className="uk-modal-dialog uk-modal-body">
                    <button className="uk-modal-close-default" type="button" data-uk-close></button>
                    <h2 className="uk-modal-title">Modal title</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

            <div class="black-gd uk-modal-dialog uk-modal-body uk-align-center uk-margin-auto-vertical">

                <button class="uk-modal-close-default" type="button" data-uk-close></button>

                <p>Enter a username</p>
                <input id="username-host" class="uk-input" placeholder="Username" type="text"/>
                <br/>
                <button id="host-confirm"  class="uk-button uk-button-secondary uk-align-center">Confirm</button>

            </div>


        </>
    )
    
}
