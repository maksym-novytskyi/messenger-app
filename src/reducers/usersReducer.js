const initialState = {
    users: [],
    getMessage: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_MESSAGE':
            /* const user = state.users.find(el => el.action.id);
             user.messages*/
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case 'USERS_FETCHED':
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;

    }
}

export default usersReducer;