import React from 'react';
import style from './Users.module.css'

const Users = ({users, follow, unfollow, setUsers}) => {

    if (users.length === 0) {
        setUsers([
            {
                id: 1, photo: 'https://newsd.in/wp-content/uploads/2019/11/04d62c82df95ec3ff3a230c681b36a14.jpg',
                followed: false, fullName: 'Lera', status: 'Heeello', location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2, photo: 'https://newsd.in/wp-content/uploads/2019/11/04d62c82df95ec3ff3a230c681b36a14.jpg',
                followed: false, fullName: 'Sveta', status: 'Heeello', location: {city: 'Kyiv', country: 'Ukraine'}
            },
            {
                id: 3, photo: 'https://newsd.in/wp-content/uploads/2019/11/04d62c82df95ec3ff3a230c681b36a14.jpg',
                followed: false, fullName: 'Michael', status: 'Heeello', location: {city: 'New York', country: 'USA'}
            },
        ])
    }

    return (
        <>
            <h2 className={style.name}>Users</h2>
            <div className={style.usersBlock}>
                {users.map((u) => <div key={u.id} className={style.userWrapper}>
                        <div className={style.user}>
                            <img src={u.photo} alt='user'/>

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
                                <span className={style.boldText}>{u.fullName}</span>
                                <span className={style.status}>{u.status}</span>
                            </div>
                            <div className={style.rightSider}>
                                <span className={style.boldText2}>{u.location.country},</span>
                                <span className={style.boldText2}>{u.location.city}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Users;