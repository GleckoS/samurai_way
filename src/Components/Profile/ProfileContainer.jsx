import React, {Component} from "react"
import {profileThunkCreator} from "../../redux/ProfileReducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


class ProfileAPIContainer extends Component{

    componentDidMount(){
        let userID = this.props.match.params.userID
        this.props.profileThunkCreator(userID)
    }


    render(){
        if(!this.props.isAuth){
            return <Redirect to={"/login"}/>
        } else {
            return <Profile
                {...this.props}
            />
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileAPIContainer)

let mapStateToProps = (state) => {
    return{
        Posts: state.Profile.Posts,
        NewPostText: state.Profile.NewPostText,
        Profile: state.Profile.profileInfo,
    }
}

let withUrlDataContainerComponentWithRouter = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {profileThunkCreator})(withUrlDataContainerComponentWithRouter)