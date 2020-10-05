const ADD_MESSAGE = `ADD-MESSAGE`

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
}

const MessagesReducer = (state = initialMessagesState, action) => {


    switch (action.type) {

        case ADD_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.MessagesData = [...state.MessagesData]

            let newMessage = {
                text: action.value,
                img: "https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png"
            }
            stateCopy.MessagesData.push(newMessage)
            return stateCopy
        }

        default: {
            return {...state}
        }
    }
}

export const AddMessage = (value) => {
    return {
        type: ADD_MESSAGE, value
    }
}


export default MessagesReducer