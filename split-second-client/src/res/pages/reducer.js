import { StaticRouter } from "react-router";

const Reducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_USER':
            return {
                ...state,
                user: action.payload
            }
        case "UPDATE_ROOM":
            return {
                ...state,
                room: action.payload
            }
        case "ADD_ENABLED_EVENT":
            return {
                ...state,
                user: {
                    ...state.user,
                    events: {
                        ...state.user.events,
                        enabled: [
                            ...state.user.events.enabled,
                            action.payload,
                        ]
                    }
                }
            }
        case "ADD_DISABLED_EVENT":
            return {
                ...state,
                user: {
                    ...state.user,
                    events: {
                        ...state.user.events,
                        disabled: [
                            ...state.user.events.disabled,
                            action.payload,
                        ]
                    }
                }
            }
        }
}

export default Reducer;