import React from 'react';
import s from './Post.module.css'

const Post = ({message, likesCount}) => {
    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/280x280_RS/59/da/82/59da82bc4ed9f6693226080968319cbd.jpg'
                 alt='avatar'
            />
            <p className={s.msg}>{message}</p>
            <button className={`${s.btn} ${s.btn1}`}>like<span>&#128077;</span> {likesCount}</button>
        </div>
    );
};

export default Post;