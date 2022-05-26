import React from 'react';
import style from './Users.module.css'
import axios from "axios";

const Users = ({users, follow, unfollow, setUsers}) => {

    const photoUrl = 'https://newsd.in/wp-content/uploads/2019/11/04d62c82df95ec3ff3a230c681b36a14.jpg'

    if (users.length === 0) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=10`)
            .then(res => setUsers(res.data.items))
    }

    return (
        <>
            <h2 className={style.name}>Users</h2>
            <div className={style.usersBlock}>
                {users.map((u) => <div key={u.id} className={style.userWrapper}>
                        <div className={style.user}>
                            <img src={u.photos.small !== null ? u.photos.small : photoUrl} alt='user'/>

                            {u.followed
                                ? <button onClick={() => unfollow(u.id)} className={`${style.customBtn} ${style.btn}`}>
                                    Follow
                                </button>
                                : <button onClick={() => follow(u.id)}
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