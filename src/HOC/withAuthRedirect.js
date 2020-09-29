import React, {} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends Component {
        render() {
            if (!this.props.isAuth)  return <Redirect to={"/login"}/>
            else return <Component {...this.props}/>
        }

   }

    let mapStateToPropsForAuth = (state) => {
        return{
            isAuth: state.Auth.isAuth
        }
    }

    return connect(mapStateToPropsForAuth)(RedirectComponent)
}

