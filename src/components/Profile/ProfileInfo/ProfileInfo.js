import React from 'react';
import c from "./ProfileInfo.module.css"
const ProfileInfo = () => {
    return (
        <div className={c.postinfo}>
            <div>
                <img src="https://images5.alphacoders.com/890/thumb-1920-890117.jpg" alt="backgroungimage"/>
            </div>
            <div className={c.discriptionBlock}>
                Ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;