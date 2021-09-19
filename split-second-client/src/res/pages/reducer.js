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
    }
}

export default Reducer;