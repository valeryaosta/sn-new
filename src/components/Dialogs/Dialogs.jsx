import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const DialogItem = ({id, name}) => {
    return (
        <div className={`${s.dialog} ${s.activeLink}`}>
            <NavLink to={`/dialogs/${id}`} className={({isActive}) => isActive ? s.activeLink : ''}>{name}</NavLink>
        </div>
    )
}

export const Message = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/*<div className={`${s.dialog} ${s.activeLink}`}>
                    <NavLink to='/dialogs/1' className={({isActive}) => isActive ? s.activeLink : ''}>Valery</NavLink>
                </div>*/}
                <DialogItem id='1' name='Valery'/>
                <DialogItem id='2' name='Dmitry'/>
                <DialogItem id='3' name='Kseniya'/>
                <DialogItem id='4' name='Vitaliy'/>
                <DialogItem id='5' name='Vladislav'/>
                <DialogItem id='6' name='Eugene'/>
            </div>
            <div className={s.messages}>
                <Message message='Hello wooooah here!'/>
                <Message message='I don’t care what you think about me. I don’t think about you at all.'/>
                <Message message='Life is a series of choices.'/>
                <Message message='Today is the best day.'/>
                <Message message='Love is in the air.'/>
            </div>
        </div>
    );
};

export default Dialogs;