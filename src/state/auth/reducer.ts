import { AuthState, AuthAction } from "./types";
import { USER_REGISTER_SUCCESS, USER_LOGIN_SUCCESS, USER_UPDATE, USER_LOGOUT } from "./types";

const initialAuthState: AuthState = {
	isAuthentificated: !!getAuthTokenFromLocalStorage(),
	authToken: getAuthTokenFromLocalStorage(),
	user: getUserFromLocalStorage(),
};

function authReducer(state = initialAuthState, action: AuthAction): AuthState {
	switch (action.type) {
		case USER_REGISTER_SUCCESS: {
			const { user, authToken } = action.payload;
			saveAuthTokenInLocalStorage(authToken);
			saveUserInLocalStorage(user);

			return {
				...state,
				user,
				authToken,
				isAuthentificated: true,
			};
		}
		case USER_LOGIN_SUCCESS: {
			const { user, authToken } = action.payload;
			saveAuthTokenInLocalStorage(authToken);
			saveUserInLocalStorage(user);

			return {
				...state,
				user,
				authToken,
				isAuthentificated: true,
			};
		}
		case USER_UPDATE: {
			const { user } = action.payload;

			return {
				...state,
				user: user,
			};
		}
		case USER_LOGOUT: {
			clearLocalStorage();

			return {
				...state,
				user: undefined,
				authToken: undefined,
				isAuthentificated: false,
			};
		}
		default:
			return state;
	}
}

export default authReducer;

function clearLocalStorage(): void {
	return localStorage.clear();
}

function getAuthTokenFromLocalStorage(): string | undefined {
	const token = localStorage.getItem("token");
	return token || undefined;
}

function getUserFromLocalStorage(): User | undefined {
	const user = localStorage.getItem("user");
	const parsedUser = user ? JSON.parse(user) : undefined;
	return parsedUser;
}

function saveAuthTokenInLocalStorage(token: string): void {
	return localStorage.setItem("token", token);
}

function saveUserInLocalStorage(userData: User): void {
	return localStorage.setItem("user", JSON.stringify(userData));
}
