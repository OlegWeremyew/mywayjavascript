import React from 'react';
import c from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize) / 400

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={c.numberPage}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && c.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p);
                                 }}>{p}</span>
                })}
            </div>
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