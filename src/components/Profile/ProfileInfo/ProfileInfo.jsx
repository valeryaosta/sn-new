import React from 'react';
import s from "../Profile.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.image}
                     src='https://stopfake.kz/wp-content/uploads/2020/09/1-3.jpg'
                     alt='main image'
                />
            </div>
            <div className={s.description}>AVA + Description</div>
        </div>
    );
};

export default ProfileInfo;