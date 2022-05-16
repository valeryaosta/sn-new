import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            MyPosts
            <div className={s.wrapper}>
            <textarea placeholder="Remember, be nice!" cols="30" rows="5">
            </textarea>
                <button className={`${s.btn} ${s.btn1}`}>Add post</button>
                <button className={`${s.btn} ${s.btn2}`}>Remove</button>
            </div>
            <div className={s.postsWrapper}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

export default MyPosts;