import React, {Component} from "react"
import {profileThunkCreator} from "../../redux/ProfileReducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


class ProfileAPIContainer extends Component{

    componentDidMount(props){
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
        Profile: state.Profile.profileInfo
    }
}

let withUrlDataContainerComponentWithRouter = withRouter(ProfileAPIContainer)

export default connect(mapStateToProps, {profileThunkCreator})(withUrlDataContainerComponentWithRouter)