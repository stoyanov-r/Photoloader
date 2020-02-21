import { AUTH_SUCCESS, AUTH_LOGOUT, AUTH_ERROR } from "../actions/actionTypes";

const initialState = {
    token: null,
    securityError: false
}

export default function auth (state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state, token: action.token, securityError: false
            }

        case AUTH_ERROR:
            return {
                ...state, securityError: true
            }
        
        case AUTH_LOGOUT:
            return {
                ...state, token: null
            }
        
        default:
            return state;
    }
}