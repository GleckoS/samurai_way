import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import MessagesReducer from "./MessagesReducer";
import NavReducer from "./NavReducer";
import DialogsReducer from "./DialogsReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk"
import LoggingReducer from "./LoggingReducer";

let reducers = combineReducers({
    Profile: ProfileReducer,
    Messages: MessagesReducer,
    Nav: NavReducer,
    Dialogs: DialogsReducer,
    Users: UsersReducer,
    Auth: AuthReducer,
    Login: LoggingReducer

})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))



export default store