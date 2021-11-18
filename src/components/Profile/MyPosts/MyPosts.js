import React from 'react';
import c from './MyPosts.module.css'
import Posts from "./Post/Posts";

const MyPosts = (props) => {

    let postsElents = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount} id={p.id}/>)

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsElents}
            </div>
        </div>
    );
}

export default MyPosts;