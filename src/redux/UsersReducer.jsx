let FOLLOW = `FOLLOW`
let UN_FOLLOW = `UN_FOLLOW`
let SET_USERS = `SET_USERS`

let initialUsersState;
initialUsersState = {
    users: [

    ]


};

const UsersReducer = (state = initialUsersState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        }
        case UN_FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followActionCreator = (userID) => ({type: FOLLOW, userID})
export const unFollowActionCreator = (userID) => ({type: UN_FOLLOW, userID})
export const setUserActionCreator = (users) => ({type: SET_USERS, users})

export default UsersReducer