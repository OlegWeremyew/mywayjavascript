import React from 'react';
import c from './Posts.module.css'

const Posts = (props) => {
    return (
        <div className={c.item}>
            <img src='https://jooinn.com/images/face-14.jpg' alt='avatar'/>
            {props.message}
            <div>
                <span>like: {props.likeCount}</span>
            </div>
        </div>
    );
}

export default Posts;