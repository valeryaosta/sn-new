import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state
    }
}

export default authReducer


// action creators
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

//TC
export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                const {email, id, login} = res.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}


