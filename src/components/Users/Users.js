import React from 'react';
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";

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

                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small !== null ? u.photos.small : photoUrl} alt='user'/>
                            </NavLink>

                            {u.followed

                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          className={`${style.unfollow}`}
                                          onClick={() => {
                                              props.toggleFollowingProgress(true, u.id)
                                              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                  withCredentials: true,
                                                  headers: {
                                                      'API-KEY': 'a4edd21c-bec0-43a3-9f93-c9250a25d69e'
                                                  }
                                              })
                                                  .then(res => {
                                                          if (res.data.resultCode === 0) {
                                                              props.unfollow(u.id)
                                                          }
                                                          props.toggleFollowingProgress(false, u.id)
                                                      }
                                                  )
                                          }
                                          }
                                >
                                    Unfollow
                                </button>
                                :
                                <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        className={`${style.follow}`}
                                        onClick={() => {
                                            props.toggleFollowingProgress(true, u.id)
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': 'a4edd21c-bec0-43a3-9f93-c9250a25d69e'
                                                }
                                            })
                                                .then(res => {
                                                        if (res.data.resultCode === 0) {
                                                            props.follow(u.id)
                                                        }
                                                        props.toggleFollowingProgress(false, u.id)
                                                    }
                                                )
                                        }
                                        }
                                >
                                    Follow
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