import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <main className={s.content}>
            <div>
                <img
                    src='https://womo.ua/wp-content/uploads/2015/02/social-network-670x300.jpg' width='90%'/>
            </div>
            <div>AVA + Description</div>
            <div>
                MyPosts
                <div>New Post</div>
                <div>Post</div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </main>
    );
};

export default Profile;