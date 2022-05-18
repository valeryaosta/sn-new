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

    const dialogs = [
        {id: 1, name: 'Valery'},
        {id: 2, name: 'Dmitry'},
        {id: 3, name: 'Kseniya'},
        {id: 4, name: 'Vitaliy'},
        {id: 5, name: 'Vladislav'},
        {id: 6, name: 'Eugene'}
    ]

    const messages = [
        {id: 1, message: 'Hello wooooah here!'},
        {id: 2, message: 'I don’t care what you think about me. I don’t think about you at all.'},
        {id: 3, message: 'Life is a series of choices.'},
        {id: 4, message: 'Today is the best day.'},
        {id: 5, message: 'Love is in the air.'},
        {id: 6, message: 'Bla bla bla'}
    ]

    const dialogsElements = dialogs.map((d) => <DialogItem id={d.id} name={d.name} key={d.id}/>)

    const messagesElements = messages.map((msg) => <Message message={msg.message} key={msg.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;