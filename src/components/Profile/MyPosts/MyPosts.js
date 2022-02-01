import React from 'react';
import c from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {Field, reduxForm} from "redux-form";

export const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount} id={p.id}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    );
}

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newPostText"} placeholder={"Enter your post"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)