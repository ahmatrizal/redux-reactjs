import { GET_USERS_LIST, GET_USER_DETAIL, POST_ADD_USER } from "../actions/userAction";

let initialState = {
    title: "AhmdR. Redux",
    getUsersList: false,
    getUserDetail: false,
    postAddUser: false,
    error: false,
}

const users = (state = initialState, action) => {

    switch (action.type) {
        case GET_USERS_LIST:
            return {
                ...state,
                getUsersList: action.payload.data,
                error: action.payload.errorMessage,
            }

        case GET_USER_DETAIL:
            return {
                ...state,
                getUserDetail: action.payload.data,
                error: action.payload.errorMessage,
            }

        case POST_ADD_USER:
            return {
                ...state,
                postAddUser: action.payload.data,
                error: action.payload.errorMessage,
            }

        default:
            return state;
    }

}

export default users;
