import React from 'react';
import c from './MyPosts.module.css'
import Posts from "./Post/Posts";
const MyPosts = () => {
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={c.posts}>
                    <Posts />
                    <Posts />
                    <Posts />
                    <Posts />
                </div>
            </div>
    );
}

export default MyPosts;