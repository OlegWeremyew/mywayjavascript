import React from 'react';
import {addPostCreater, updateNewPostTextCreater} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState()

                    let addPost = () => {
                        store.dispatch(addPostCreater())
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostTextCreater(text);
                        store.dispatch(action)
                    }

                    return (
                        <MyPosts
                            updateNewPostText={onPostChange}
                            addPost={addPost}
                            posts={store.getState().profilePage.posts}
                            newPostText={store.getState().profilePage.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;