import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <main className={s.content}>
            <div>
                <img className={s.image}
                     src='https://stopfake.kz/wp-content/uploads/2020/09/1-3.jpg'
                     alt='main image'
                />
            </div>
            <div className={s.text}>
                <div>AVA + Description</div>
                <MyPosts/>
            </div>
        </main>
    );
};

export default Profile;