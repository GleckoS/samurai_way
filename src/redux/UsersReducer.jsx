let FOLLOW = `FOLLOW`
let UN_FOLLOW = `UN_FOLLOW`
let SET_USERS = `SET_USERS`
let SET_CURRENT_PAGE_UP = `SET_CURRENT_PAGE_UP`
let SET_CURRENT_PAGE_DOWN = `SET_CURRENT_PAGE_DOWN`
let SET_USERS_TOTAL_COUNT = `SET_USERS_TOTAL_COUNT`
let TOGGLE_LOADER = `TOGGLE_LOADER`

let initialUsersState;
initialUsersState = {
    users: [],
    totalUsersCount: 0,
    pagesCount: 10,
    currentPage: 1,
    isFetching: false,

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
       /* case UN_FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }*/
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE_UP: {
            return {...state, currentPage: action.currentPage += 1}
        }
        case SET_CURRENT_PAGE_DOWN: {
            return {...state, currentPage: action.currentPage -= 1}
        }
        case SET_USERS_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_LOADER: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export const follow = (userID) => ({type: FOLLOW, userID})
export const unFollow = (userID) => ({type: UN_FOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPageUP = (currentPage) => ({type: SET_CURRENT_PAGE_UP, currentPage})
export const setCurrentPageDOWN = (currentPage) => ({type: SET_CURRENT_PAGE_DOWN, currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, totalUsersCount})
export const toggleLoader = (isFetching) => ({type: TOGGLE_LOADER, isFetching})

export default UsersReducer