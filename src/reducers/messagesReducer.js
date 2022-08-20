const initialState = {
    user: []
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_MESSAGE':
            /* const user = state.users.find(el => el.action.id);
             user.messages*/
            return {
                ...state,
                messages: [...state.messages, action.payload.message]
            }
        default:
            return state;

    }
}

export default messagesReducer;