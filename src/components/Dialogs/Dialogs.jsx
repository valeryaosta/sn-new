import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.activeLink}`}>
                    <NavLink to='/dialogs/1' className={({isActive}) => isActive ? s.activeLink : ''}>Valery</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2' className={({isActive}) => isActive ? s.activeLink : ''}>Dmitry</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3' className={({isActive}) => isActive ? s.activeLink : ''}>Kseniya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4' className={({isActive}) => isActive ? s.activeLink : ''}>Vitaliy</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5' className={({isActive}) => isActive ? s.activeLink : ''}>Vladislav</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6' className={({isActive}) => isActive ? s.activeLink : ''}>Eugene</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello wooooah here!</div>
                <div className={s.message}>I don’t care what you think about me. I don’t think about you at all.</div>
                <div className={s.message}>Life is a series of choices.</div>
            </div>
        </div>
    );
};

export default Dialogs;