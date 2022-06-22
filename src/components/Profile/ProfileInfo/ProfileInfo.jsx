import React, {useState} from 'react';
import s from "../Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {ProfileDataReduxForm} from "../ProfileDataForm";
import photo from "../../../assets/main.jpg"


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false)

    const photoUrl = 'https://newsd.in/wp-content/uploads/2019/11/04d62c82df95ec3ff3a230c681b36a14.jpg'

    if (!profile) {
        return <Preloader/>
    }

    const onAvatarChanged = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const submit = (values) => {
        saveProfile(values).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div>
            <div>
                <img className={s.image}
                     src={photo}
                     alt='main'
                />
            </div>
            <div className={s.description}>
                <div className={s.leftSider}>
                    <img src={profile.photos.large || photoUrl} className={s.avatar}
                         alt='avatar'
                    />
                    {isOwner && <div>
                        <input type='file' onChange={onAvatarChanged} id='fileBtn'/>
                    </div>
                    }

                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>


                    {editMode
                        ? <ProfileDataReduxForm profile={profile} initialValues={profile} onSubmit={submit}/>
                        : <ProfileData profile={profile} isOwner={isOwner}
                                       setToEditMode={() => setEditMode(true)}/>
                    }

                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;


export const Contact = ({contactTitle, contactValue}) => {
    return (
        <span className={s.contact}><b>{contactTitle}</b>: {!!contactValue ? contactValue : 'no info...'}</span>
    )
}

export const ProfileData = ({profile, isOwner, setToEditMode}) => {
    return (
        <>
            {isOwner &&
            <div className={s.btnEdit}>
                <button onClick={setToEditMode} className={s.edit}>edit</button>
            </div>}

            <div className={s.contacts}>
                <div className={s.left}>

                    <b className={s.name}>Name: <b className={s.fullName}>{profile.fullName}</b></b>

                    <span><b>About me:</b> {profile.aboutMe ? profile.aboutMe : 'nothing..'}</span>
                    <span><b>Looking for a job: </b> {profile.lookingForAJob ? 'Yes' : 'No'}</span>
                    <span><b>Description: </b>{!!profile.lookingForAJobDescription ? profile.lookingForAJobDescription : ' nothing..'}</span>
                </div>

                <div className={s.right}>
                    <p className={s.heading}>Contacts:</p>

                    {Object.keys(profile.contacts).map((key) => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}
                </div>
            </div>
        </>
    )
}