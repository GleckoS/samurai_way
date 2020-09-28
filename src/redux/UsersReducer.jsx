let FOLLOW = `FOLLOW`
let UN_FOLLOW = `UN_FOLLOW`
let SET_USERS = `SET_USERS`
let SET_CURRENT_PAGE_UP = `SET_CURRENT_PAGE_UP`
let SET_CURRENT_PAGE_DOWN = `SET_CURRENT_PAGE_DOWN`
let SET_USERS_TOTAL_COUNT = `SET_USERS_TOTAL_COUNT`
let TOGGLE_LOADER = `TOGGLE_LOADER`
let FOLLOWING_IN_PROGRESS = `FOLLOWING_IN_PROGRESS`

let initialUsersState;
initialUsersState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    FollowingInProgress: []
};


const UsersReducer = (state = initialUsersState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID && u.followed === false) {
                        return {...u, followed: true}
                    } else if (u.id === action.userID && u.followed === true){
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE_UP: {
            return {...state, currentPage: state.currentPage += 1}
        }
        case SET_CURRENT_PAGE_DOWN: {
            return {...state, currentPage: state.currentPage -= 1}
        }
        case SET_USERS_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_LOADER: {
            return {...state, isFetching: action.isFetching}
        }
        case FOLLOWING_IN_PROGRESS:{
            return {
                ...state,
                FollowingInProgress: action.isFetching
                ? [...state.FollowingInProgress, action.id]
                : state.FollowingInProgress.filter(id => id !== action.id)
            }
        }
        default:
            return state
    }
}

export const follow = (userID) => ({type: FOLLOW, userID})
export const unFollow = (userID) => ({type: UN_FOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPageUP = () => ({type: SET_CURRENT_PAGE_UP})
export const setCurrentPageDOWN = () => ({type: SET_CURRENT_PAGE_DOWN})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, totalUsersCount})
export const toggleLoader = (isFetching) => ({type: TOGGLE_LOADER, isFetching})
export const toggleFollowButton = (isFetching, id) => ({type: FOLLOWING_IN_PROGRESS, isFetching, id})

export default UsersReducer