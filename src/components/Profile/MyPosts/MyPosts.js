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
                    <Posts message='Hi, how are you?' likeCount='12' />
                    <Posts message="I'm ok, and you?" likeCount='7' />
                </div>
            </div>
    );
}

export default MyPosts;