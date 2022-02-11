import React from 'react';
import c from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unFollow, follow}) => {
    return (
        <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                     className={c.userPhoto}
                                     alt="photo"/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress
                                    .some(id => id === user.id)}
                                          onClick={() => {
                                              unFollow(user.id)
                                          }}>Follow</button>

                                : <button disabled={followingInProgress
                                    .some(id => id === user.id)}
                                          onClick={() => {
                                              follow(user.id)
                                          }}>unFollow</button>}
                        </div>
                     </span>
            <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status ? user.status : "статус не установлен"}</div>
                        </span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
        </div>
    );
};

export default User;