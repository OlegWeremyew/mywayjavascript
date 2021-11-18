import React from 'react';
import c from './MyPosts.module.css'
import Posts from "./Post/Posts";

let posts = [
    {id: 1, message: "Hi, how are you?'", likesCount: 12},
    {id: 2, message: "I'm great, and you?", likesCount: 7},
];

let postsElents = posts.map(p => <Posts message={p.message} likesCount={p.likesCount} id={p.id}/>)

const MyPosts = () => {
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