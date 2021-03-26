import { GET_USERS_LIST } from "../actions/userAction";

let initialState = {
    getUsersList: false,
    title: "AhmdR. Redux",
    error : false,
}

const users = (state = initialState, action) => {
    
    switch (action.type) {
        case GET_USERS_LIST:
            return {
                ...state,
                getUsersList : action.payload.data,
                error : action.payload.errorMessage,
            }
    
        default:
            return state;
    }
     
}

export default users;
