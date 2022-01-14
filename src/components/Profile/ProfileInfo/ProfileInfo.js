import React from 'react';
import c from "./ProfileInfo.module.css"
import Preolader from "../../../common/Preolader";
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
                <img src={props.profile.photos.large} alt="photos ava"/>
                Ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;