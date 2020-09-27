import React, {Component} from "react";
import Users from "./Users";
import {connect} from "react-redux"
import {
    follow,
    setCurrentPageDOWN,
    setCurrentPageUP,
    setUsers,
    setUsersTotalCount,
    toggleLoader,
    unFollow
} from "../../redux/UsersReducer";
import Loading from "../Loading/Loading";
import {UserAPI} from "../../API/API";



class UsersAPIContainer extends Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleLoader(true)
            UserAPI.getUsers({ currentPage: this.props.currentPage, pageSize: this.props.pageSize})
                .then(
                    (response) => {debugger
                        this.props.setUsers(response.items)
                        this.props.setUsersTotalCount(response.totalCount)
                        this.props.toggleLoader(false)
                    }
                )
        }
    }


    onPageChangedDOWN = () => {
        if(this.props.currentPage > 1) {
            this.props.setCurrentPageDOWN()
            this.props.toggleLoader(true)

            UserAPI.getUsersDown({ currentPage: this.props.currentPage, pageSize: this.props.pageSize})
                .then(
                    (response) => {
                        this.props.setUsers(response.items)
                        this.props.toggleLoader(false)

                    }
                )
        }
    }
    onPageChangedUP = () => {
        this.props.setCurrentPageUP()
        this.props.toggleLoader(true)

        UserAPI.getUsersUp({currentPage: this.props.currentPage, pageSize: this.props.pageSize})
            .then(
                (response) => {
                    this.props.setUsers(response.items)
                    this.props.toggleLoader(false)
                }
            )
    }
    render() {
        return <>
            {this.props.isFetching ? <Loading/> : <Users
                onPageChangedDOWN={this.onPageChangedDOWN}
                onPageChangedUP={this.onPageChangedUP}
                users={this.props.users}
                currentPage={this.props.currentPage}
                unFollow={this.props.unFollow}
                Follow={this.props.follow}

            />}
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.Users.users,
        pageSize: state.Users.pageSize,
        totalUsersCount: state.Users.totalUsersCount,
        currentPage: state.Users.currentPage,
        isFetching: state.Users.isFetching
    }
}

let UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPageDOWN,
    setCurrentPageUP,
    setUsersTotalCount,
    toggleLoader
})(UsersAPIContainer)
export default UsersContainer