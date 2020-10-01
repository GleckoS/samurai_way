import {UserAPI} from "../API/API";

const ADD_POST = `ADD-POST`
const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`
const SET_CURRENT_PROFILE = `SET_CURRENT_PROFILE`
const SET_CURRENT_PROFILE_STATUS = `SET_CURRENT_PROFILE_STATUS`
const UPDATE_CURRENT_PROFILE_STATUS = `UPDATE_CURRENT_PROFILE_STATUS`

let initialProfileState = {
    Posts: [
        {
            id: 1,
            emoji: "https://icons.iconarchive.com/icons/designbolts/emoji/256/Emoji-Blushing-icon.png",
            text: "Уже месяц учу React-Redux"
        },
        {
            id: 2,
            emoji: "https://icons.iconarchive.com/icons/designbolts/emoji/256/Emoji-Rage-icon.png",
            text: "Мой Первый пост :D"
        }
    ],
    NewPostText: "Default",
    profileInfo: null,
    profileStatus: null,
    message: null

}

const ProfileReducer = (state = initialProfileState, action) => {
    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 1,
                text: state.NewPostText,
                emoji: "https://icons.iconarchive.com/icons/designbolts/emoji/256/Emoji-Blushing-icon.png"
            }
            return {
                ...state,
                Posts: [...state.Posts, newPost],
                NewPostText: ""
            }
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                NewPostText: action.newText
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

export const addPost = () => ({type: ADD_POST})
export const OnPostChange = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setCurrentProfile = (profileInfo) => ({type: SET_CURRENT_PROFILE, profileInfo})
export const setCurrentProfileStatus = (profileStatus) => ({type: SET_CURRENT_PROFILE_STATUS, profileStatus})
export const updateCurrentProfileStatus = (message) => ({type: UPDATE_CURRENT_PROFILE_STATUS, message})

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
    return () => {
        UserAPI.UpdateProfileStatus(status)
            .then(
                (response) => {
                    console.log(response)
                }
            )
    }
}

export default ProfileReducer

