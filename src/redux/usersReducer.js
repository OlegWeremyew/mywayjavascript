const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"


let initialState = {
    users: [],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW : {
            return {
                ...state,
                users: state.users.map(m => {
                    if (m.id === action.userID) {
                        return {...m, followed: true}
                    }
                    return m
                })
            }
        }
        case UNFOLLOW : {
            return {
                ...state,
                users: state.users.map(m => {
                    if (m.id === action.userID) {
                        return {...m, followed: false}
                    }
                    return m
                })
            }
        }
        case SET_USERS : {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unFollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer

