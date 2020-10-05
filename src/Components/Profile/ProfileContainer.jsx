import React, {Component} from "react"
import {
    addPost,
    updateProfileStatusThunkCreator,
    profileThunkCreator,
} from "../../redux/ProfileReducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileAPIContainer extends Component {

    componentDidMount() {
        let userID = this.props.match.params.userID
        this.props.profileThunkCreator(userID)
        this.props.updateProfileStatusThunkCreator(userID)
    }


    render() {
        return <Profile
            {...this.props}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        Posts: state.Profile.Posts,
        Profile: state.Profile.profileInfo,
        ProfileStatus: state.Profile.profileStatus,
    }
}

export default compose(
    connect(mapStateToProps, {profileThunkCreator, updateProfileStatusThunkCreator, addPost}),
    withRouter,
    withAuthRedirect
)(ProfileAPIContainer)