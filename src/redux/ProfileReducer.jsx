const ADD_POST = `ADD-POST`
const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`

let initialProfileState = {
    Posts: [
        {
            id: 1,
            emoji: "https://icons.iconarchive.com/icons/designbolts/emoji/256/Emoji-Blushing-icon.png",
            text: "Уже неделю учу React-Redax"
        },
        {
            id: 2,
            emoji: "https://icons.iconarchive.com/icons/designbolts/emoji/256/Emoji-Rage-icon.png",
            text: "Мой Первый пост :D"
        }
    ],
    NewPostText: "Default"
}

const ProfileReducer = (state = initialProfileState, action) => {

    let stateCopy = {
        ...state,
        Posts: [...state.Posts]
    }


    switch (action.type) {
        case ADD_POST:
            let newPost = {
                text: state.NewPostText,
                emoji: "https://icons.iconarchive.com/icons/designbolts/emoji/256/Emoji-Blushing-icon.png"
            }

            stateCopy.Posts.push(newPost)
            stateCopy.NewPostText = ""
            return stateCopy

        case UPDATE_NEW_POST_TEXT:
            stateCopy.NewPostText = action.newText
            return stateCopy

        default:
            return stateCopy
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const OnPostChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default ProfileReducer