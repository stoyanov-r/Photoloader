import axios from 'axios';
import { AUTH_SUCCESS, AUTH_LOGOUT, AUTH_ERROR } from './actionTypes';


const API_KEY = process.env.REACT_APP_API_KEY;
const ACCESS_ID = process.env.REACT_APP_ACCESS_ID.split(', ');

export function auth(email, password, isLogin) {
  return async dispatch => {
    const authData = {
      'email': email,
      'password': password,
      'returnSecureToken': true
    }

    let url = isLogin
      ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
      : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`

    const response = await axios.post(url, authData)
    const data = response.data
    const expirationDate = new Date(new Date().getTime() + data.expiresIn * 2400000)
    localStorage.setItem('expDate', expirationDate)
    localStorage.setItem('token', data.idToken)
    localStorage.setItem('userId', data.localId)

    if (ACCESS_ID.includes(data.localId)) {
      console.log('success');
      dispatch(authSuccess(data.idToken))
      dispatch(autoLogout(data.expiresIn))
    } else {
      dispatch(authError())
    }

  }
}

export function authError() {
  return {
    type: AUTH_ERROR,
  }
}

export function authSuccess(token) {
  return {
    type: AUTH_SUCCESS,
    token
  }


}

export function autoLogout(time) {
  return dispatch => {
    setTimeout(() => dispatch(logout()), time * 1000)
  }
}

export function logout() {
  localStorage.removeItem('expDate')
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
  return {
    type: AUTH_LOGOUT
  }
}

export function autoLogin() {
  return dispatch => {
    const token = localStorage.getItem('token')
    const expirationDate = localStorage.getItem('expDate')
    const expirationTime = (new Date(expirationDate).getTime() - new Date()) / 1000
    const userID = localStorage.getItem('userId')

    if (!token || !ACCESS_ID.includes(userID)) {
      dispatch(logout())
    } else {
      dispatch(authSuccess(userID))
      dispatch(autoLogout(expirationTime))
    }
  }
}