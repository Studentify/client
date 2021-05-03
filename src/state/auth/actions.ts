import axios from 'api/axiosInstance';
import { Dispatch } from 'redux';

import { 
  AuthAction,
  UserAttributes,

  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,

  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,

  USER_LOGOUT,
} from './types';


export const register = (userAttrs: UserAttributes) =>
  async (dispatch: Dispatch<AuthAction>) => {
    try {
      await axios.post('Authenticate/register', userAttrs);
      // temporary to get token immediately after registration
      const resLogin = await axios.post('Authenticate/login', { username: userAttrs.username, password: userAttrs.password });

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: {
          user: {
            id: "1",
            firstName: "Adrian",
            lastName: "Furman",
            email: "user@example.com",
          },
          authToken: resLogin.data.token,
        }
      });
    } catch(err) {
      dispatch({
        type: USER_REGISTER_FAILURE,
        payload: {
          message: err.message,
        }
    });
  }
}

export const login = (username: string, password: string) =>
  async (dispatch: Dispatch<AuthAction>) => {
    try {
      const res = await axios.post('Authenticate/login', { username, password });

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: {
          user: {
            id: "1",
            firstName: "Adrian",
            lastName: "Furman",
            email: "user@example.com",
          },
          authToken: res.data.token,
        }
      });
    } catch(err) {
      dispatch({
        type: USER_LOGIN_FAILURE,
        payload: {
          message: err.message,
        }
    });
  }
}

export const logout = (): AuthAction => {
  return {
    type: USER_LOGOUT,
    payload: null,
  }
} 
