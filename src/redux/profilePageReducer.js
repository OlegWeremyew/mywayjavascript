const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?'", likesCount: 12},
        {id: 2, message: "I'm great, and you?", likesCount: 7},
    ],
    newPostText: 'it-kamasutra',
    profile: null,
}

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return  {
                ...state,
                posts : [...state.posts, newPost],
                newPostText: ""
            }
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText:action.newText
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        default:
            return state
    }
}

export const addPostCreater = () => ({type: ADD_POST})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})

export const updateNewPostTextCreater = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})



export default profilePageReducer

