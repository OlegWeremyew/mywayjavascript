import React from 'react';
import c from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={c.posts}>
            <ProfileInfo/>
            <MyPosts
                posts={props.state.posts}
                addPost={props.addPost}
            />
        </div>
    );
}

export default Profile;