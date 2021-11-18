import React from 'react';
import c from './MyPosts.module.css'
import Posts from "./Post/Posts";

let postData = [
    {id: 1, message: "Hi, how are you?'", likesCount: 12},
    {id: 2, message: "I'm ok, and you?", likesCount: 7},
];

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
                    <Posts message={postData[0].message}
                           likesCount={postData[0].likesCount}
                           id={postData[0].id}/>
                    <Posts message={postData[1].message}
                           likesCount={postData[1].likesCount}
                           id={postData[1].id}/>
                </div>
            </div>
    );
}

export default MyPosts;