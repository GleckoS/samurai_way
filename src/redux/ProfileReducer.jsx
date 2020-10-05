import {UserAPI} from "../API/API";

const ADD_POST = `ADD-POST`
const SET_CURRENT_PROFILE = `SET_CURRENT_PROFILE`
const SET_CURRENT_PROFILE_STATUS = `SET_CURRENT_PROFILE_STATUS`
const UPDATE_CURRENT_PROFILE_STATUS = `UPDATE_CURRENT_PROFILE_STATUS`

let initialProfileState = {
    Posts: [
        {
            id: 1,
            text: "Уже месяц учу React-Redux"
        },
        {
            id: 2,
            text: "Мой Первый пост :D"
        }
    ],
    profileInfo: null,
    profileStatus: null,
    message: null

}

const ProfileReducer = (state = initialProfileState, action) => {
    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 3,
                text: action.value
            }
            return {
                ...state,
                Posts: [...state.Posts, newPost],
            }
        }

        case SET_CURRENT_PROFILE: {
            return {...state, profileInfo: action.profileInfo}
        }
        case SET_CURRENT_PROFILE_STATUS: {
            return {...state, profileStatus: action.profileStatus}
        }
        case UPDATE_CURRENT_PROFILE_STATUS: {
          return {...state, message: action.message}
        }
        default: {
            return state
        }

    }
}

export const addPost = (value) => ({type: ADD_POST, value})
export const setCurrentProfile = (profileInfo) => ({type: SET_CURRENT_PROFILE, profileInfo})
export const setCurrentProfileStatus = (profileStatus) => ({type: SET_CURRENT_PROFILE_STATUS, profileStatus})

export const profileThunkCreator = (userID) => {
    return (dispatch) => {
        UserAPI.getProfile(userID)
            .then(
                (response) => {
                    dispatch(setCurrentProfile(response))
                }
            )
    }
}
export const profileStatusThunkCreator = (userID) => {
    return (dispatch) => {
        UserAPI.getProfileStatus(userID)
            .then(
                (response) => {
                    dispatch(setCurrentProfileStatus(response))
                }
            )

    }
}

export const updateProfileStatusThunkCreator = (status) => {
    return(dispatch) => {
        UserAPI.UpdateProfileStatus(status)
            .then(
                () => {
                    dispatch(setCurrentProfileStatus(status))
                }
            )
    }
}

export default ProfileReducer

