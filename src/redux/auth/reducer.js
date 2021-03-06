import * as types from "./types";

const initialState = {
  username: (localStorage.getItem('username') ? localStorage.getItem('username') : ''),
  password: (localStorage.getItem('password') ? localStorage.getItem('password') : ''),
  isLoggedIn: (localStorage.getItem('username') ? true : false),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_LOGIN:
      return {
        ...state,
        username: action.username,
        password: (localStorage.getItem('password') ? localStorage.getItem('password') : ''),
        isLoggedIn: true
      };
    case types.AUTH_LOGOUT:
      return {
        ...state,
        username: '',
        password: '',
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default authReducer;
   