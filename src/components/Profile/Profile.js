import React from 'react';
import c from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsCntainer from "./MyPosts/MyPostsCntainer";

const Profile = (props) => {
    return (
        <div className={c.posts}>
            <ProfileInfo/>
            <MyPostsCntainer />
        </div>
    );
}

export default Profile;