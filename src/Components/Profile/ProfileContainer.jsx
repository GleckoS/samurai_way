import React, {Component} from "react"
import {addPost, OnPostChange, profileThunkCreator} from "../../redux/ProfileReducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileAPIContainer extends Component{

    componentDidMount(){
        let userID = this.props.match.params.userID
        this.props.profileThunkCreator(userID)
    }


    render(){
            return <Profile
                {...this.props}
            />
    }
}

let mapStateToProps = (state) => {
    return{
        Posts: state.Profile.Posts,
        NewPostText: state.Profile.NewPostText,
        Profile: state.Profile.profileInfo,
    }
}

export default compose(
    connect(mapStateToProps, {profileThunkCreator, OnPostChange, addPost}),
    withRouter,
    withAuthRedirect
)(ProfileAPIContainer)