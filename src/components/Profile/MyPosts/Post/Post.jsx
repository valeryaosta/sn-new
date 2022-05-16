import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/280x280_RS/59/da/82/59da82bc4ed9f6693226080968319cbd.jpg'
                 alt='avatar'
            />
            Post 1
            <button className={`${s.btn} ${s.btn1}`}>like &#128077;</button>
        </div>
    );
};

export default Post;