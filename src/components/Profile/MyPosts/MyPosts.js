import React from 'react';
import c from './MyPosts.module.css'
import Posts from "./Post/Posts";
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
                    <Posts message='Hi, how are you?' likesCount='12' />
                    <Posts message="I'm ok, and you?" likesCount='7' />
                </div>
            </div>
    );
}

export default MyPosts;