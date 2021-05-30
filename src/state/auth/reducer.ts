import { AuthState, AuthAction } from './types';
import { 
  USER_REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from './types';

const initialAuthState: AuthState = {
  isAuthentificated: !!getAuthTokenFromLocalStorage(),
  authToken: getAuthTokenFromLocalStorage(),
}

function authReducer(state = initialAuthState, action: AuthAction): AuthState {
  switch(action.type) {
    case USER_REGISTER_SUCCESS: {
      const { user, authToken } = action.payload;
      saveAuthTokenInLocalStorage(authToken);

      return {
        ...state,
        user,
        authToken,
        isAuthentificated: true,
      }
    }
    case USER_LOGIN_SUCCESS: {
      const { user, authToken } = action.payload;
      saveAuthTokenInLocalStorage(authToken);

      return {
        ...state,
        user,
        authToken,
        isAuthentificated: true,
      }
    }
    case USER_LOGOUT: {
      return {
        ...state,
        user: undefined,
        authToken: undefined,
        isAuthentificated: false,
      }
    }
    default:
      return state;
  }
}

export default authReducer;

function getAuthTokenFromLocalStorage(): string | undefined {
  const token = localStorage.getItem("token");
  return token || undefined;
}

function saveAuthTokenInLocalStorage(token: string): void {
  return localStorage.setItem("token", token);
}