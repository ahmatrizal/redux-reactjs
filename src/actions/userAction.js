import axios from 'axios'

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const POST_ADD_USER = "POST_ADD_USER";


export const getUsersList = () => {
  return (dispatch) => {
    axios
      .get("http://my-json-server.typicode.com/ahmatrizal/redux-reactjs/users")
      .then(function (response) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getUserDetail = (id) => {
  return (dispatch) => {
    axios
      .get("http://my-json-server.typicode.com/ahmatrizal/redux-reactjs/users/" + id)
      .then(function (response) {
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postAddUser = (data) => {
  return (dispatch) => {
    axios
      .get("http://my-json-server.typicode.com/ahmatrizal/redux-reactjs/users" , data)
      .then(function (response) {
        dispatch({
          type: POST_ADD_USER,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_ADD_USER,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const delUserDetail = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};