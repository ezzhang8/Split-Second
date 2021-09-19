import React, { useState, useContext } from 'react';
import { Context } from '../store'

export default function MonthView(props) {
    return (
        <div className = "uk-overflow-auto">
            <table class="uk-table uk-table-divider">
                <thead>
                    <tr>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>

                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}