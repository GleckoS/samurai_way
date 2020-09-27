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


class UsersAPIContainer extends Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleLoader(true)
            fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesCount}`,
                {credentials: 'include'})
                .then(res => res.json())
                .then(
                    (response) => {
                        this.props.setUsers(response.items)
                        this.props.setUsersTotalCount(response.totalCount)
                        this.props.toggleLoader(false)
                    }
                )
        }
    }


    onPageChangedDOWN = (curPage) => {
        this.props.setCurrentPageDOWN(curPage)
        this.props.toggleLoader(true)
        fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${this.}&count=${this.props.pagesCount}`,
            {credentials: 'include'})
            .then(res => res.json())
            .then(
                (response) => {
                    this.props.setUsers(response.items)
                    this.props.toggleLoader(false)

                }
            )
    }
    onPageChangedUP = (curPage) => {
        this.props.setCurrentPageUP(curPage)
        this.props.toggleLoader(true)
        fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${this.}&count=${this.props.pagesCount}`,
            {credentials: 'include'})
            .then(res => res.json())
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
        pagesCount: state.Users.pagesCount,
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