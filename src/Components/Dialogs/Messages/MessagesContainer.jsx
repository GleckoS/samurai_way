import React from "react"
import {addMessageActionCreator, OnMessageChangeActionCreator} from "../../../redux/MessagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let stateConnect = (state) => {

    return {
        MessagesData: state.Messages.MessagesData,
        NewMessageText: state.Messages.NewMessageText
    }
}

let dispatchConnect = (dispatch) => {
    return {
        AddMessage: () => {
            dispatch(addMessageActionCreator())
        },
        OnMessageChange: (text) => {
            dispatch(OnMessageChangeActionCreator(text))
        }
    }
}


let MessagesContainer = connect(stateConnect, dispatchConnect)(Messages)

export default MessagesContainer