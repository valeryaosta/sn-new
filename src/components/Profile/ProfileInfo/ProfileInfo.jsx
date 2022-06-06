import React from 'react';
import s from "../Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({profile, status, updateStatus}) => {

    const photoUrl = 'https://newsd.in/wp-content/uploads/2019/11/04d62c82df95ec3ff3a230c681b36a14.jpg'

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={s.image}
                     src='https://stopfake.kz/wp-content/uploads/2020/09/1-3.jpg'
                     alt='main'
                />
            </div>
            <div className={s.description}>
                <div>
                    <img src={profile.photos?.small !== null ? profile.photos?.small : photoUrl} className={s.avatar} alt='avatar'/>

                    <ProfileStatus status={status} updateStatus={updateStatus} />

                    <span><b>About me:</b> {profile.aboutMe}</span>
                    <span><b>Looking for a job: </b> {profile.lookingForAJob ? 'Yes' : 'No'}</span>
                    <span><b>Description: </b>{profile.lookingForAJobDescription}</span>
                </div>
                <div className={s.contacts}>
                    <p className={s.fullName}><b>{profile.fullName}</b></p>

                    <b>Contacts:</b>
                    <span>facebook: {profile.contacts.facebook}</span>
                    <span>github: {profile.contacts.github}</span>
                    <span>instagram: {profile.contacts.instagram}</span>
                    <span>mainLink: {profile.contacts.mainLink}</span>
                    <span>twitter: {profile.contacts.twitter}</span>
                    <span>vk: {profile.contacts.vk}</span>
                </div>

            </div>
        </div>
    );
};

export default ProfileInfo;