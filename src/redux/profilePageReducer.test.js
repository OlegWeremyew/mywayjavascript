import {addPost, deletePost, profilePageReducer} from "./profilePageReducer";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?'", likesCount: 12},
        {id: 2, message: "I'm great, and you?", likesCount: 7},
    ]}

test("length post should be equal 3", () => {

    let newState = profilePageReducer(state, addPost("Oleg super"))

    expect(newState.posts.length).toBe(3)

})

test("text new post message should be true", () => {

    let newState = profilePageReducer(state, addPost("Oleg super"))

    expect(newState.posts[2].message).toBe("Oleg super")

})

test("length after deleted element should be decrement", () => {

    let newState = profilePageReducer(state, deletePost(1))

    expect(newState.posts.length).toBe(1)

})

test("length after deleted element should be same", () => {

    let newState = profilePageReducer(state, deletePost(15))

    expect(newState.posts.length).toBe(2)

})

