
const LOGIN = 'LOGIN';
const SEARCH_USERS = 'SEARCH_USERS';
const VIEW_USER_PROFILE = 'VIEW_USER_PROFILE';
const UNLOCK_USER_ACCOUNT = 'UNLOCK_USER_ACCOUNT';
const RESET_PASSWORD = 'RESET_PASSWORD';

const initialState = {
	loading: false,
	userData: [],
	error: ''
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
      case LOGIN:
        return {
          ...state
        };
      case SEARCH_USERS:
        return {
          ...state
        };
      case VIEW_USER_PROFILE:
        return {
          ...state
        };
      case UNLOCK_USER_ACCOUNT:
        return {
          ...state
        };
      case RESET_PASSWORD:
        return {
          ...state
        };
      default:
          return state;
      }
};

export default userReducer;
