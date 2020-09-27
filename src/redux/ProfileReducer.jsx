const ADD_POST = `ADD-POST`
const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`
const SET_CURRENT_PROFILE = `SET_CURRENT_PROFILE`

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
    profileInfo: null

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
            debugger
            return {
                ...state,
                NewPostText: action.newText
            }
        }

        case SET_CURRENT_PROFILE: {
            debugger
            return {...state, profileInfo: action.profileInfo}
        }
        default: {
            return state
        }

    }
}

export const addPost = () => ({type: ADD_POST})
export const OnPostChange = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setCurrentProfile = (profileInfo) => ({type: SET_CURRENT_PROFILE, profileInfo})

export default ProfileReducer