import { AuthState, AuthAction } from "./types";
import axios from "api/axiosInstance";
import { USER_REGISTER_SUCCESS, USER_LOGIN_SUCCESS, USER_UPDATE, USER_LOGOUT } from "./types";

const initialAuthState: AuthState = {
	isAuthentificated: !!getAuthTokenFromLocalStorage(),
	authToken: getAuthTokenFromLocalStorage(),
	user: undefined,
};

function authReducer(state = initialAuthState, action: AuthAction): AuthState {
	switch (action.type) {
		case USER_REGISTER_SUCCESS: {
			const { user, authToken } = action.payload;
			saveAuthTokenInLocalStorage(authToken);
			saveUserIdInLocalStorage(user.id);

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

// ????????? async init
async function getUserFromLocalStorage(): Promise<User | undefined> {
	const id = localStorage.getItem("id");
	if (id) {
		const { data } = await axios.get<User>(`/StudentifyAccounts/${id}`);
		return data;
	}
	return undefined;
}

function saveAuthTokenInLocalStorage(token: string): void {
	return localStorage.setItem("token", token);
}

function saveUserIdInLocalStorage(id: number): void {
	return localStorage.setItem("id", id.toString());
}
