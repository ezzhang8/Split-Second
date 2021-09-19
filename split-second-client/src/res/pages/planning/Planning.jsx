import React, { useContext } from 'react';
import { socket } from "../../api"
import { Context } from '../store'

import { useParams } from "react-router-dom";

import MonthView from "../calendar/MonthView";

export default function Planning() {
    const [state, dispatch] = useContext(Context);

    const { id } = useParams();

    return (
        <div class="uk-container uk-margin-top">
            <div id="pre-game">

                <h4 class="uk-margin-remove-bottom">Join with the code below.</h4>
                <b><h1 id="join-code">{id}</h1></b>
                <h4 class="uk-margin-remove-bottom">Test</h4>
                {console.log(state.user)}
                <div class="uk-container uk-margin-xlarge-left uk-margin-xlarge-right uk-align-center">
                    {state.views.currentCalendar === "month" && <MonthView/>}
                </div>
            </div>
        </div>
    )
}