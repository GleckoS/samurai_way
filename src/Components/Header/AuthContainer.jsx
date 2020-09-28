import React, {Component} from "react";
import {connect} from "react-redux";
import {loggingThunkCreator,} from "../../redux/AuthReducer";
import Header from "./Header";


class HeaderAPIContainer extends Component {

    componentDidMount() {
            this.props.loggingThunkCreator()

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

let AuthContainer = connect(mapStateToProps, {loggingThunkCreator})(HeaderAPIContainer)

export default AuthContainer