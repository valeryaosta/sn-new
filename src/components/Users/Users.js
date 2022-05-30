import React from 'react';
import style from "./Users.module.css";

const Users = (props) => {

    const photoUrl = 'https://newsd.in/wp-content/uploads/2019/11/04d62c82df95ec3ff3a230c681b36a14.jpg'

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <>
            <div className={style.userPages}>
                {pages.map(p => {
                    return <span onClick={() => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p ? style.selectedPage : ''}>
                                    {p}
                    </span>
                })}
            </div>

            <h2 className={style.name}>Users</h2>
            <div className={style.usersBlock}>
                {props.users.map((u) => <div key={u.id} className={style.userWrapper}>
                        <div className={style.user}>
                            <img src={u.photos.small !== null ? u.photos.small : photoUrl} alt='user'/>

                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}
                                          className={`${style.customBtn} ${style.btn}`}>
                                    Follow
                                </button>
                                : <button onClick={() => props.follow(u.id)}
                                          className={`${style.customBtn} ${style.btn} ${style.btn2}`}>
                                    Unfollow
                                </button>
                            }

                        </div>

                        <div className={style.userInfo}>
                            <div className={style.leftSider}>
                                <span className={style.boldText}>{u.name}</span>
                                <span className={style.status}>{u.status}</span>
                            </div>
                            <div className={style.rightSider}>
                                <span className={style.boldText2}>{'Country'}</span>
                                <span className={style.boldText2}>{'City'}</span>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </>
    );
};

export default Users;