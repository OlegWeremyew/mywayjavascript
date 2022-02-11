import React from 'react';
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

const Users = ({
                   currentPage,
                   onPageChanged,
                   totalUserCount,
                   pageSize,
                   users,
                   follow,
                   unFollow,
                   followingInProgress,
               }) => {

    return (
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUserCount}
                pageSize={pageSize}
            />
            <div>
                {
                    users.map(m => <User
                        key={m.id}
                        user={m}
                        followingInProgress={followingInProgress}
                        unFollow={unFollow}
                        follow={follow}
                    />)
                }
            </div>

        </div>
    );
};

export default Users;