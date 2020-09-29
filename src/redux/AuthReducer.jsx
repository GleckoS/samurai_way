import {UserAPI} from "../API/API";

let TOGGLE_LOADER = `TOGGLE_LOADER`
let SET_AUTH_USER_DATA = `SET_AUTH_USER_DATA`

let initialAuthState;
initialAuthState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};


const AuthReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case TOGGLE_LOADER: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const toggleLoader = (isFetching) => ({type: TOGGLE_LOADER, isFetching})
export const setAuthUserData = (id, email, login) => ({type: SET_AUTH_USER_DATA, data: {id, email, login}})


export const loggingThunkCreator = () => {
    return (dispatch) => {

        UserAPI.Logining()
            .then(
                (response) => {
                    if (response.resultCode === 0) {
                        let {id, email, login} = response.data
                        dispatch(setAuthUserData(id, email, login))
                    }
                }
            )
    }
}

export default AuthReducer