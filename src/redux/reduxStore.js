import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import MessagesReducer from "./MessagesReducer";
import NavReducer from "./NavReducer";
import DialogsReducer from "./DialogsReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
    Profile: ProfileReducer,
    Messages: MessagesReducer,
    Nav: NavReducer,
    Dialogs: DialogsReducer,
    Users: UsersReducer
})

let store = createStore(reducers)



export default store