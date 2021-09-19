import React, { useContext, useEffect, useState  } from 'react';
import { socket } from "../../api"
import { Context } from '../store'

import { useParams } from "react-router-dom";

import MonthView from "../calendar/MonthView";

export default function Planning() {
    const [state, dispatch] = useContext(Context);
    const [date, setDate] = useState(new Date());

    const timezoneOffset = (new Date()).getTimezoneOffset();

    const { id } = useParams();

    useEffect(() => {
        if (state.user.username == undefined) {
            socket.emit('joinRoom', {code: id, timezone: timezoneOffset}, (res) => {
                console.log(state.room);

                dispatch({type: 'UPDATE_USER', payload: res.user});
                dispatch({type: 'UPDATE_ROOM', payload: res.room});
            })
        }
    }, [])
    

    socket.on('joinUpdate', (room) => {
        dispatch({type: 'UPDATE_ROOM', payload: room});

    });

    function changeTime(direction) {
        if (date.getMonth() == 11 && direction == 1) {
            setDate(new Date(date.getFullYear()+1, 0, 1));
        }
        else if (date.getMonth() == 0 && direction == -1) {
            setDate(new Date(date.getFullYear()-1, 11, 1));
        }
        else {
            setDate(new Date(date.getFullYear(), date.getMonth()+direction, 1));
            console.log(new Date(date.getFullYear(), date.getMonth()+direction, 1));
        }
    }


    return (
        <div class="uk-container uk-margin-top">
            <div id="pre-game">
                <h4 class="uk-margin-remove-bottom">Join with the code below.</h4>
                <b><h1 id="join-code">{id}</h1></b>
                
                <button onClick={() => changeTime(-1)} className="uk-button uk-button-secondary">{"<"}</button>
            <button onClick={() => changeTime(1)} style={{margin: "0px 0px 0px 10px"}} className="uk-button uk-button-secondary">{">"}</button>

                    {state.views.currentCalendar === "month" && (
                        <MonthView date = {date}/>
                    )}
            </div>
        </div>
    )
}