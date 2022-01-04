import React from 'react';
import c from './Users.module.css';
import * as axios from "axios";
import userPhoto from "../../assets/images/user.png"

const Users = (props) => {
    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return (
        <div>
            {
                props.users.map(m => <div key={m.id}>
                    <span>
                        <div>
                            <img src={m.photos.small !== null ? m.photos.small : userPhoto} className={c.userPhoto}
                                 alt="photo"/>
                        </div>
                        <div>
                            {m.followed ? <button onClick={() => {
                                props.unfollow(m.id)
                            }}>Follow</button> : <button onClick={() => {
                                props.follow(m.id)
                            }}>unFollow</button>}
                        </div>
                     </span>
                    <span>
                        <span>
                            <div>{m.name}</div>
                            <div>{m.status}</div>
                        </span>
                        <span>
                            <div>{"m.location.country"}</div>
                            <div>{"m.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;