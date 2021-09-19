import React, { useState, useContext } from 'react';
import { Context } from '../store';
import { months, daysInMonth } from "./dates";
import Modal from 'react-modal';

function MonthCard(props) {
    return (
        <button type="button" onClick={() => {
            props.setIsOpen(true);
            props.setDate(new Date(props.currentDate.getFullYear(), props.currentDate.getMonth(), props.dateNum))
        }}
            //background: "linear-gradient(to right, red 20%, orange 20% 40%, yellow 40% 60%, green 60% 80%, blue 80%)",
            style={{ width: "100%", padding: "25px", fontSize: "30px" }}
            class="uk-button uk-button-secondary">
            {props.dateNum}
        </button>
    )
}


export default function MonthView(props) {
    const [state, dispatch] = useContext(Context);
    const [date, setDate] = useState(new Date());
    const days = daysInMonth(props.date.getMonth(), props.date.getFullYear());

    const [conflicts, setConflicts] = useState({});

    const [modalIsOpen, setIsOpen] = useState(false);


    let firstDay = new Date(props.date.getFullYear(), props.date.getMonth(), 1);
    let dayTrack = 0;

    function findGoodTimes(time) {
        let res = [];
        for (let user of state.room.users) {
            for (let ev of user.events.enabled) {
                let evDate = new Date(ev);
                if (evDate.toDateString() == time.toDateString()) {
                    res.push(user);
                }
            }
        }

        return res;
    }

    function TimeSelector(props) {
        return (
            <div style={{ margin: "10px" }}>
                <button style={{ backgroundColor: "red", margin: "5px" }} onClick={()=>{
                    dispatch({type: "ADD_DISABLED_EVENT", payload: new Date(date.getFullYear(), date.getMonth(), date.getDate(), props.value)})
                    console.log(state.user)
               }} className="uk-button uk-button-secondary">Bad Time</button>
                <button style={{ width: "35%" }} disabled={true} className="uk-button uk-button-secondary">{props.label}</button>
                <button style={{ backgroundColor: "green", margin: "5px" }} onClick={()=>{
                    dispatch({type: "ADD_ENABLED_EVENT", payload: new Date(date.getFullYear(), date.getMonth(), date.getDate(), props.value)})
                    console.log(state.user)
               }} className="uk-button uk-button-secondary">Good Time</button>
               <p>{
                   findGoodTimes(new Date(date.getFullYear(), date.getMonth(), date.getDate(), props.value)).map((user) => {
                       return (
                           <p>{user.username}</p>
                       )
                   })
                }</p>
            </div>
        )
    }


    return (
        <div>
            <h3>{months[props.date.getMonth()]} {props.date.getFullYear()}</h3>

            <table style={{ textAlign: 'center', overflowX: "scroll" }} class="uk-table">
                <thead >
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            console.log(firstDay)
                        }
                        {[...Array(firstDay.getDay())].map((value) => {
                            return <td><h6></h6></td>
                        })}
                        {[...Array(7 - firstDay.getDay())].map((value) => {
                            dayTrack++;
                            return <td><MonthCard currentDate={props.date} setIsOpen={setIsOpen} setDate={setDate} dateNum={dayTrack} /></td>
                        })}
                    </tr>
                    {[...Array(5)].map((value) => {
                        return (
                            <tr>
                                {[...Array(7)].map((value) => {
                                    if (dayTrack < days) {
                                        dayTrack++;
                                        return <td><MonthCard currentDate={props.date} setIsOpen={setIsOpen} setDate={setDate} dateNum={dayTrack} /></td>
                                    }
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <Modal
            isOpen={modalIsOpen}
            contentLabel={"Example Modal"}
            style={{
                content: {
                    backgroundColor: "black"
                }
            }}>
                <button onClick={()=>{setIsOpen(false)}} className="uk-button uk-button-secondary">Close</button>
                <h2 className="uk-modal-title">{date.toDateString()}</h2>
                <TimeSelector label="12:00 AM" value={0} />
                {[...Array(11)].map((value, index) => {
                    return <TimeSelector label={(index + 1) + ":00 AM"} value={index+1} />
                })}
                <TimeSelector label="12:00 PM" value={12} />
                {[...Array(11)].map((value, index) => {
                    return <TimeSelector label={(index + 1) + ":00 PM"} value={index + 13} />
                })}

            </Modal>




        </div>
    )
}