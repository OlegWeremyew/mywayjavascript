import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = "social_network/profile/ADD-POST";
const SET_USER_PROFILE = "social_network/profile/SET-USER-PROFILE";
const SET_STATUS = "social_network/profile/SET-STATUS";
const DELETE_POST = "social_network/profile/DELETE-POST";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?'", likesCount: 12},
        {id: 2, message: "I'm great, and you?", likesCount: 7},
    ],
    profile: null,
    status: "",
}

export const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(f => f.id !== action.postId)
            }
        }
        default:
            return state
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response))
}
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setStatus(status))
    }
}


