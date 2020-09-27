let TOGGLE_LOADER = `TOGGLE_LOADER`
let SET_AUTH_USER_DATA = `SET_AUTH_USER_DATA`

let initialUsersState;
initialUsersState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};


const AuthReducer = (state = initialUsersState, action) => {
    switch (action.type) {
        case TOGGLE_LOADER: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
                iaAuth: true
            }
        }
        default:
            return state
    }
}

export const toggleLoader = (isFetching) => ({type: TOGGLE_LOADER, isFetching})
export const setAuthUserData = (id, email, login) => ({type: SET_AUTH_USER_DATA, data: {id, email, login}})


export default AuthReducer