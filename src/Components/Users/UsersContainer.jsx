import React from "react";
import Users from "./Users";
import {connect} from "react-redux"
import {followActionCreator, setUserActionCreator, unFollowActionCreator} from "../../redux/UsersReducer";

const mapStateToProps = (state) => {
    return{
        users: state.Users.users
    }
}
debugger
const mapDispatchToProps = (dispatch) => {
    return{
        follows: (userID) => {
            dispatch(followActionCreator(userID))
        },
        unFollow: (userID) => {
            dispatch(unFollowActionCreator(userID))
        },
        setUsers : (users) => {
                dispatch(setUserActionCreator(users))

        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer