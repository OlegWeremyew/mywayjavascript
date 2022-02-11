import React from 'react';
import c from "./ProfileInfo.module.css"
import avatarDefault from '../../../assets/images/icon.png'
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {

    return (
        <div className={c.postinfo}>
            <div className={c.discriptionBlock}>
                <div className={c.avaStyle}>
                    <img
                        src={profile && profile.photos.large !== null ? profile.photos.large : avatarDefault}
                        alt={""}/>
                </div>
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    );
}

export default ProfileInfo;