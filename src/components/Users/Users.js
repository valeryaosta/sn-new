import React from 'react';
import style from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = ({
                   totalUsersCount,
                   pageSize,
                   currentPage,
                   onPageChanged,
                   users,
                   followingInProgress,
                   follow,
                   unfollow
               }) => {

    return (
        <>
            {/*<h2 className={style.name}>Users</h2>*/}
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}
                       pageSize={pageSize} portionSize={20}
            />

            <div className={style.usersBlock}>
                {users.map((u) => <User key={u.id}
                                        user={u}
                                        followingInProgress={followingInProgress}
                                        follow={follow}
                                        unfollow={unfollow}
                    />
                )}
            </div>
        </>
    );
};

export default Users;