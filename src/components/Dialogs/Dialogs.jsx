import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


const Dialogs = ({dialogs, messages}) => {

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