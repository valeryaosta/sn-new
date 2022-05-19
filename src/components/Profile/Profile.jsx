import React from 'react';
// import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({posts}) => {
    return (
        <main>
            <div>
                <ProfileInfo/>
                <MyPosts posts={posts}/>
            </div>
        </main>
    );
};

export default Profile;