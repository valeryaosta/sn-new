import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS : {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

export default appReducer

// AC
export const setInitialized = () => ({type: INITIALIZED_SUCCESS})

// TC
export const  initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(setInitialized())
    })
}

