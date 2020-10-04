import {UserAPI} from "../API/API";

const CATCH_ANSWER = `CATCH_ANSWER`

let initialAuthState;
initialAuthState = {
    email: "",
    password: "",
    select: false,
    values: null
};


const AuthReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case CATCH_ANSWER:
            return {...state, values: action.values, email: "", login: "", select: false}
        default:
            return state
    }
}

export const LoggingAnswer = (values) => ({type: CATCH_ANSWER, values})


export const loggingFormThunkCreator = (values) => {
    return (dispatch) => {
        UserAPI.LoggingForm(values)
            .then(
                (response) => {
                    dispatch(LoggingAnswer(response))
                }
            )
    }
}

export default AuthReducer