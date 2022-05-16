import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <main className={s.content}>
            <div>
                <img
                    src='https://womo.ua/wp-content/uploads/2015/02/social-network-670x300.jpg' width='90%'
                    alt='image'
                />
            </div>
            <div>AVA + Description</div>
            <MyPosts/>
        </main>
    );
};

export default Profile;