import React from 'react';
import c from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {updateNewPostText} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElents = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount} id={p.id}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
       // props.addPost()
        props.dispatch({ type: "ADD-POST"})
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
       // props.updateNewPostText(text)
        let action = { type: "UPDATE-NEW-POST-TEXT", newText: text};
        props.dispatch(action)
    }

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}  value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsElents}
            </div>
        </div>
    );
}

export default MyPosts;