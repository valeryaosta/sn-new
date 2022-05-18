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

    const dialogsData = [
        {id: 1, name: 'Valery'},
        {id: 2, name: 'Dmitry'},
        {id: 3, name: 'Kseniya'},
        {id: 4, name: 'Vitaliy'},
        {id: 5, name: 'Vladislav'},
        {id: 6, name: 'Eugene'}
    ]

    const messagesData = [
        {id: 1, message: 'Hello wooooah here!'},
        {id: 2, message: 'I don’t care what you think about me. I don’t think about you at all.'},
        {id: 3, message: 'Life is a series of choices.'},
        {id: 4, message: 'Today is the best day.'},
        {id: 5, message: 'Love is in the air.'},
        {id: 6, message: 'Bla bla bla'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/*<div className={`${s.dialog} ${s.activeLink}`}>
                    <NavLink to='/dialogs/1' className={({isActive}) => isActive ? s.activeLink : ''}>Valery</NavLink>
                </div>*/}
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name}/>
                <DialogItem id={dialogsData[5].id} name={dialogsData[5].name}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
                <Message message={messagesData[5].message}/>
            </div>
        </div>
    );
};

export default Dialogs;