import {usersAPI} from "../API/api";
import {updateObjectInArray} from "../utils/objectsHelpers";

const FOLLOW = "social_network/users/FOLLOW"
const UNFOLLOW = "social_network/users/UNFOLLOW"
const SET_USERS = "social_network/users/SET-USERS"
const SET_CURRENT_PAGE = "social_network/users/SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "social_network/users/SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "social_network/users/TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "social_network/users/TOGGLE-IS-FOLLOWING-PROGRESS"


let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW : {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: true})
            }
        }
        case UNFOLLOW : {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: false})
            }
        }
        case SET_USERS : {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE : {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT : {
            return {
                ...state,
                totalUserCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING : {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS : {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userID) => ({type: FOLLOW, userID})
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

//=========================================== thunks

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unFollow = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unfollowSuccess)
}


