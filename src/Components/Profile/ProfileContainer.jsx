import React from "react"
import {addPostActionCreator, OnPostChangeActionCreator} from "../../redux/ProfileReducer";
import Profile from "./Profile";
import {connect} from "react-redux";


let stateConnect = (state) => {
    return{
        Posts: state.Profile.Posts,
        NewPostText: state.Profile.NewPostText
    }
}
let dispatchConnect = (dispatch) => {
    return{
        OnPostChange: (text) => {
            dispatch(OnPostChangeActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

let ProfileContainer = connect(stateConnect, dispatchConnect)(Profile)

export default ProfileContainer

// Posts={props.state.Profile.Posts} NewPostText={props.state.Profile.NewPostText} dispatch={props.dispatch}