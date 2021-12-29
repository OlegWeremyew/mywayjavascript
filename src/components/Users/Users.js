import React from 'react';
import c from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://avatars.mds.yandex.net/i?id=15f31a0c59e4c25b3bfdb71b5d937fff-4571331-images-thumbs&n=13",
                followed: false,
                fullName: "Oleg",
                status: "i will become a dev",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: "https://avatars.mds.yandex.net/i?id=5e66a21138b2780ace063a859cd2720f-5250913-images-thumbs&n=13",
                followed: true,
                fullName: "Diana",
                status: "i will become a greatmom",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 3,
                photoUrl: "https://avatars.mds.yandex.net/i?id=18b3d4807a4d172acfa19681464e7aa3-2816701-images-thumbs&n=13",
                followed: false,
                fullName: "Egor",
                status: "i like beer",
                location: {city: "Moscow", country: "Russia"}
            },
        ])
    }

    return (
        <div>
            {
                props.users.map(m => <div key={m.id}>
                    <span>
                        <div>
                            <img src={m.photoUrl} className={c.userPhoto} alt="photo"/>
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
                            <div>{m.fullName}</div>
                            <div>{m.status}</div>
                        </span>
                        <span>
                            <div>{m.location.country}</div>
                            <div>{m.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;