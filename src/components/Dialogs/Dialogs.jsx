import React from 'react';
import s from './Dialogs.module.css'
import style from '../Profile/MyPosts/MyPosts.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = ({dialogs, messages, newMessageText, dispatch}) => {

    const dialogsElements = dialogs.map((d) => <DialogItem id={d.id} name={d.name} key={d.id} ava={d.ava}/>)

    const messagesElements = messages.map((msg) => <Message message={msg.message} key={msg.id}/>)

    const onAddPost = () => {
        dispatch(addMessageActionCreator())
    }

    const onChangeHandle = (e) => {
        const newText = e.currentTarget.value
        dispatch(updateMessageActionCreator(newText))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.messageArea}>
                <textarea value={newMessageText}
                          onChange={onChangeHandle}
                          placeholder="Add a new message.."
                          cols="30" rows="5"
                />
                    <button onClick={onAddPost} className={`${style.btn} ${style.btn1}`}>Add post</button>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;