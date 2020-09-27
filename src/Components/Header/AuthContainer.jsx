import React, {Component} from "react";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/AuthReducer";
import Header from "./Header";


class HeaderAPIContainer extends Component {

    componentDidMount() {

            fetch(`https://social-network.samuraijs.com/api/1.0/auth/me`,
                {credentials:  'include'})
                .then(res => res.json())
                .then(
                    (response) => {
                        if(response.resultCode === 0){
                            let {id, email, login} = response.data
                            this.props.setAuthUserData(id, email, login)
                        }
                    }
                )

    }

    render() {
        return <Header {...this.props}/>
    }
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth,
        login: state.Auth.login
    }
}

let AuthContainer = connect(mapStateToProps, {setAuthUserData})(HeaderAPIContainer)

export default AuthContainer