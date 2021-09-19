import React, {createContext, useReducer} from "react";
import Reducer from './reducer'


const initialState = {
    user: {
        events: {
            enabled: [],
            disabled: []
        }
    },
    room: {},
    views: {
        currentCalendar: "month",
    }
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;
