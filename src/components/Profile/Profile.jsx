import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus}) => {
    return (
        <main>
            <div>
                <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
                <MyPostsContainer/>
            </div>
        </main>
    );
};

export default Profile;