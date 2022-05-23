import React from 'react';
// import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({posts, addPost, newPostText, updateNewPostText, dispatch}) => {
    return (
        <main>
            <div>
                <ProfileInfo/>
                <MyPosts posts={posts}
                        // addPost={addPost}
                        // updateNewPostText={updateNewPostText}
                         newPostText={newPostText}
                         dispatch={dispatch}
                />
            </div>
        </main>
    );
};

export default Profile;