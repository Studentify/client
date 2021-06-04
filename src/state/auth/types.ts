export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAILURE = "USER_REGISTER_FAILURE";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const USER_LOGOUT = "USER_LOGOUT";

export interface UserAttributes {
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export interface User {
	id: string;
	userName: string;
	firstName: string;
	lastName: string;
	email: string;
}

export interface AuthState {
	user?: User;
	authToken?: string;
	isAuthentificated: boolean;
}

interface UserRegisterSuccess {
	type: typeof USER_REGISTER_SUCCESS;
	payload: {
		user: User;
		authToken: string;
	};
}

interface UserRegisterFailure {
	type: typeof USER_REGISTER_FAILURE;
	payload: {
		message: string;
	};
}

interface UserLoginSuccess {
	type: typeof USER_LOGIN_SUCCESS;
	payload: {
		user: User;
		authToken: string;
	};
}

interface UserLoginFailure {
	type: typeof USER_LOGIN_FAILURE;
	payload: {
		message: string;
	};
}

interface UserLogout {
	type: typeof USER_LOGOUT;
	payload: null;
}

export type AuthAction =
	| UserRegisterSuccess
	| UserRegisterFailure
	| UserLoginSuccess
	| UserLoginFailure
	| UserLogout;
