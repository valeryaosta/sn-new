import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile}) => {
    return (
        <main>
            <div>
                <ProfileInfo profile={profile}/>
                <MyPostsContainer/>
            </div>
        </main>
    );
};

export default Profile;