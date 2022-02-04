import React from 'react';
import c from "./ProfileInfo.module.css"
import avatarDefault from '../../../assets/images/icon.png'
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    return (
        <div className={c.postinfo}>
{/*            <div>
                <img src="https://images5.alphacoders.com/890/thumb-1920-890117.jpg" alt="backgroungimage"/>
            </div>*/}
            <div className={c.discriptionBlock}>
                <div className={c.avaStyle}>
                    <img
                        src={props.profile && props.profile.photos.large !== null ? props.profile.photos.large : avatarDefault}
                        alt={""}/>
                </div>
                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    );
}

export default ProfileInfo;