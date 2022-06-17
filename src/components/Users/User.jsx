import React from 'react';
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";


const User = ({user, followingInProgress, follow, unfollow}) => {
    const photoUrl = 'https://newsd.in/wp-content/uploads/2019/11/04d62c82df95ec3ff3a230c681b36a14.jpg'

    return (
        <>
            <div className={style.userWrapper}>
                <div className={style.user}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small !== null ? user.photos.small : photoUrl} alt='user'/>
                    </NavLink>

                    {user.followed

                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  className={`${style.unfollow}`}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}
                        >
                            Unfollow
                        </button>
                        :
                        <button disabled={followingInProgress.some(id => id === user.id)}
                                className={`${style.follow}`}
                                onClick={() => {
                                    follow(user.id)
                                }}
                        >
                            Follow
                        </button>
                    }
                </div>

                <div className={style.userInfo}>
                    <div className={style.leftSider}>
                        <span className={style.boldText}>{user.name}</span>
                        <span className={style.status}>{user.status}</span>
                    </div>
                    <div className={style.rightSider}>
                        <span className={style.boldText2}>{'Country'}</span>
                        <span className={style.boldText2}>{'City'}</span>
                    </div>
                </div>

            </div>
        </>
    );
};

export default User;