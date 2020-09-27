import React, {Component} from "react"
import {addPost, OnPostChange, setCurrentProfile} from "../../redux/ProfileReducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";



class ProfileAPIContainer extends Component{

    componentDidMount(props){
        let userID = this.props.match.params.userID
        
        debugger
        /*${this.props.match.params.userID ? this.props.match.params.userID : 2}*/
        fetch(`https://social-network.samuraijs.com/api/1.0/profile/${userID ? userID : "2"}`)
            .then(res => res.json())
            .then(
                (response) => {
                    this.props.setCurrentProfile(response)
                }
            )
        debugger
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

export default connect(mapStateToProps, {OnPostChange, addPost, setCurrentProfile})(withUrlDataContainerComponentWithRouter)