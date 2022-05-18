import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            MyPosts
            <div className={s.wrapper}>
            <textarea placeholder="Remember, be nice!" cols="30" rows="5">
            </textarea>
                <button className={`${s.btn} ${s.btn1}`}>Add post</button>
                <button className={`${s.btn} ${s.btn2}`}>Remove</button>
            </div>
            <div className={s.postsWrapper}>
                <Post message='Hello world!' likesCount='23'/>
                <Post message='React, Redux.. you will know them cool!' likesCount='15'/>
                <Post message='Each failure is the next success!' likesCount='100'/>
                <Post message='Wake me up when September ends..' likesCount='7'/>
            </div>
        </div>
    );
};

export default MyPosts;