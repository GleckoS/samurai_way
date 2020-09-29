import React, {Component} from "react";
import Users from "./Users";
import {connect} from "react-redux"
import {
    followUnFollowThunkCreator,
    getUsersDownThunkCreator,
    getUsersThunkCreator,
    getUsersUpThunkCreator
} from "../../redux/UsersReducer";
import Loading from "../Loading/Loading";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

class UsersAPIContainer extends Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize)
        }
    }

    onPageChangedUP = () => {
        this.props.getUsersUp(this.props.currentPage, this.props.pageSize)
    }

    onPageChangedDOWN = () => {
        if(this.props.currentPage > 1) {
            this.props.getUsersDown(this.props.currentPage, this.props.pageSize)
        }
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Loading/>
                : <Users
                    onPageChangedDOWN={this.onPageChangedDOWN}
                    onPageChangedUP={this.onPageChangedUP}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    FollowingInProgress={this.props.FollowingInProgress}
                    followUnFollow={this.props.followUnFollow}
                    isAuth={this.props.isAuth}
                />}
        </>
    }
}

let AuthRedirectComponent = withAuthRedirect(UsersAPIContainer)


const mapStateToProps = (state) => {
    return {
        users: state.Users.users,
        pageSize: state.Users.pageSize,
        totalUsersCount: state.Users.totalUsersCount,
        currentPage: state.Users.currentPage,
        isFetching: state.Users.isFetching,
        FollowingInProgress: state.Users.FollowingInProgress,
    }
}

let UsersContainer = connect(mapStateToProps, {
    getUsers: getUsersThunkCreator,
    getUsersUp: getUsersUpThunkCreator,
    getUsersDown: getUsersDownThunkCreator,
    followUnFollow: followUnFollowThunkCreator
})(AuthRedirectComponent)

export default UsersContainer