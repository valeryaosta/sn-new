import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    return (
        <main>
            <div>
                <ProfileInfo isOwner={isOwner}
                             profile={profile}
                             status={status}
                             updateStatus={updateStatus}
                             savePhoto={savePhoto}/>
                <MyPostsContainer/>
            </div>
        </main>
    );
};

export default Profile;