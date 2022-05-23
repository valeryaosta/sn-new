import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({posts, newPostText, dispatch}) => {
    return (
        <main>
            <div>
                <ProfileInfo/>
                <MyPosts posts={posts}
                         newPostText={newPostText}
                         dispatch={dispatch}
                />
            </div>
        </main>
    );
};

export default Profile;