let FOLLOW = `FOLLOW`
let UN_FOLLOW = `UN_FOLLOW`
let SET_USERS = `SET_USERS`

let initialUsersState = {
    users: [
        {id: 1, photoUrl: `https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png`, followed: false, fullName: "Bohdan", status: "HAVAHEYO", location:{city:`Krakow`, country:`Poland`}},
        {id: 2, photoUrl: `https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png`, followed: true, fullName: "Ehor", status: "HAEYO", location:{city:`Odessa`, country:`Ukraine`}},
        {id: 3, photoUrl: `https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png`, followed: false, fullName: "Dima", status: "HAVAHYO", location:{city:`Minsk`, country:`Belarus`}},
        {id: 4, photoUrl: `https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png`, followed: false, fullName: "Anton", status: "HAVAHE", location:{city:`Moscow`, country:`Russia`}},
        {id: 5, photoUrl: `https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png`, followed: false, fullName: "Roma", status: "HHEYO", location:{city:`Tokio`, country:`Japan`}}
    ]
}

debugger
const UsersReducer = (state = initialUsersState, action) => {
        switch (action.type) {
            case FOLLOW:{
                return {
                    ...state,
                    users: state.users.map(u => {
                        if(u.id === action.userID){
                            return {...u, followed: true}
                        }
                        return u
                    })
                }

            }
            case UN_FOLLOW:{
                return {
                    ...state,
                    users: state.users.map(u => {
                        if(u.id === action.userID){
                            return {...u, followed: false}
                        }
                        return u
                    })
                }
            }
            case SET_USERS:{
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