const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"


let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: "Oleg",
            status: "i will become a dev",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 2,
            followed: true,
            fullName: "Diana",
            status: "i will become a greatmom",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 3,
            followed: false,
            fullName: "Egor",
            status: "i like beer",
            location: {city: "Moscow", country: "Russia"}
        },
    ],
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

        default:
            return state
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unFollowAC = (userID) => ({type: UNFOLLOW, userID})

export default usersReducer

