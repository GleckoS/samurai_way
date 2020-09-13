import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import MessagesReducer from "./MessagesReducer";
import NavReducer from "./NavReducer";

let store = {
    _state: {
        Profile: {
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
            NewPostText: "",
        },
        Dialogs: {
            DialogsData: [
                {
                    id: 1,
                    name: "Bohdan",
                    img: "https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png",
                    text: "lorem ipsum dolor sit amet..."
                },
                {
                    id: 2,
                    name: "Ehor",
                    img: "https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png",
                    text: "lorem ipsum dolor sit amet..."
                },
                {
                    id: 3,
                    name: "Ilia",
                    img: "https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png",
                    text: "lorem ipsum dolor sit amet..."
                },
                {
                    id: 4,
                    name: "Dima",
                    img: "https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png",
                    text: "lorem ipsum dolor sit amet..."
                },
                {
                    id: 5,
                    name: "Nikita",
                    img: "https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png",
                    text: "lorem ipsum dolor sit amet..."
                },
                {
                    id: 6,
                    name: "Katya",
                    img: "https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png",
                    text: "lorem ipsum dolor sit amet..."
                }
            ],
        },
        Messages: {
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
            NewMessageText: "",
        },
        Nav: {
            Friends:
                [
                    {
                        id: "1",
                        img: "https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png",
                        name: "Sasha",
                    },
                    {
                        id: "2",
                        img: "https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png",
                        name: "Dima",
                    },
                    {
                        id: "3",
                        img: "https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png",
                        name: "Roma",
                    },
                ],
        },
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },


    dispatch(action) {

        this._state.Profile = ProfileReducer(this._state.Profile, action)
        this._state.Dialogs = DialogsReducer(this._state.Dialogs, action)
        this._state.Messages = MessagesReducer(this._state.Messages, action)
        this._state.Nav = NavReducer(this._state.Nav, action)

        this._callSubscriber(this._state)

    }
}


export default store