const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?'", likesCount: 12},
        {id: 2, message: "I'm great, and you?", likesCount: 7},
    ],
    newPostText: 'it-kamasutra'
}

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ""
            return stateCopy
        }

        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostCreater = () => ({type: ADD_POST})

export const updateNewPostTextCreater = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profilePageReducer

