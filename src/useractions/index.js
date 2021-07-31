const LOGIN = 'LOGIN';
const SEARCH_USERS = 'SEARCH_USERS';
const VIEW_USER_PROFILE = 'VIEW_USER_PROFILE';
const UNLOCK_USER_ACCOUNT = 'UNLOCK_USER_ACCOUNT';
const RESET_PASSWORD = 'RESET_PASSWORD';

export const login = () => {
	return {
		type: LOGIN
	};
};

export const search_users = () => {
	return {
		type: SEARCH_USERS
	};
};

export const view_user_profile = data => {
	return {
		type: VIEW_USER_PROFILE,
		payload: data
	};
};

export const unlock_user_account = error => {
	return {
		type: UNLOCK_USER_ACCOUNT,
		payload: error
	};
};

export const reset_password = () => {
	return {
		type: RESET_PASSWORD
	};
};
