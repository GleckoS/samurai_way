import React, {Component} from "react"
import {addPost, OnPostChange, setCurrentProfile} from "../../redux/ProfileReducer";
import Profile from "./Profile";
import {connect} from "react-redux";



class ProfileAPIContainer extends Component{

    componentDidMount(props){
        fetch(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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


let ProfileContainer = connect(mapStateToProps, {OnPostChange, addPost, setCurrentProfile})(ProfileAPIContainer)

export default ProfileContainer
