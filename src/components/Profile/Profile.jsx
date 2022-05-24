import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <main>
            <div>
                <ProfileInfo/>
                <MyPostsContainer />
            </div>
        </main>
    );
};

export default Profile;