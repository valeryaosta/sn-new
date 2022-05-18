import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    const postData = [
        {id: 1, message: 'Hello world!', likesCount: 23},
        {id: 2, message: 'React, Redux.. you will know them cool!', likesCount: 15},
        {id: 3, message: 'Each failure is the next success!', likesCount: 100},
        {id: 4, message: 'Wake me up when September ends..', likesCount: 7}
    ]

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
                <Post message={postData[2].message} likesCount={postData[2].likesCount}/>
                <Post message={postData[3].message} likesCount={postData[3].likesCount}/>
            </div>
        </div>
    );
};

export default MyPosts;