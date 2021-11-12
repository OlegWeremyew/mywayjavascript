import React from 'react';
import c from './Posts.module.css'

const Posts = () => {
    return (
        <div className={c.item}>
            <img src='https://jooinn.com/images/face-14.jpg' alt='avatar'/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Posts;