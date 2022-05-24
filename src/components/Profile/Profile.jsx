import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({store}) => {
    return (
        <main>
            <div>
                <ProfileInfo/>
                <MyPostsContainer store={store}/>
            </div>
        </main>
    );
};

export default Profile;