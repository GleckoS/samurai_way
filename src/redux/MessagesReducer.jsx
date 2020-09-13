const ADD_MESSAGE = `ADD-MESSAGE`
const UPDATE_NEW_MESSAGE_TEXT = `UPDATE-NEW-MESSAGE-TEXT`

let initialMessagesState = {
    MessagesData: [
        {
            text: "loremloremloremloremloremloremlorem",
            sender: "person",
            img: "https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png",

        },
        {
            text: 'loremloremloremloremloremloremlorem',
            sender: "friend",
            img: "https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png",

        },
    ],
    NewMessageText: "DefaultMessageText",
}

const MessagesReducer = (state = initialMessagesState, action) => {


    switch (action.type) {

        case ADD_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.MessagesData = [...state.MessagesData]

            let newMessage = {
                text: state.NewMessageText,
                img: "https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png"
            }

            stateCopy.MessagesData.push(newMessage)
            stateCopy.NewMessageText = ""
            return stateCopy
        }

        case UPDATE_NEW_MESSAGE_TEXT: {

            let stateCopy = {...state}

            stateCopy.NewMessageText = action.newText
            return stateCopy
        }

        default: {

            let stateCopy = {...state}

            return stateCopy
        }
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const OnMessageChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}


export default MessagesReducer