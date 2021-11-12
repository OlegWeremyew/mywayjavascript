import React from 'react';
import c from './Profile.module.css'
const Profile = () => {
    return (
        <div className={c.content}>
            <div>
                <img src="https://images5.alphacoders.com/890/thumb-1920-890117.jpg" alt="backgroungimage"/>
            </div>
            <div>
                Ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={c.posts}>
                    <div className={c.item}>
                        post 1
                    </div>
                    <div className={c.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;