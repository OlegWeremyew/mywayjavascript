import React from 'react';
import c from "./ProfileInfo.module.css"
import Preolader from "../../../common/Preolader";
import avatarDefault from '../../../assets/images/icon.png'
const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preolader/>
    }

    return (
        <div className={c.postinfo}>
            <div>
                <img src="https://images5.alphacoders.com/890/thumb-1920-890117.jpg" alt="backgroungimage"/>
            </div>
            <div className={c.discriptionBlock}>
                <img src={props.profile && props.profile.photos.large !== null ? props.profile.photos.large : avatarDefault} alt={""}/>
                Ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;