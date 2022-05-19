import React, {useRef} from 'react';
import s from './Dialogs.module.css'
import style from '../Profile/MyPosts/MyPosts.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


const Dialogs = ({dialogs, messages}) => {

    const textRef = useRef(null)

    const dialogsElements = dialogs.map((d) => <DialogItem id={d.id} name={d.name} key={d.id} ava={d.ava}/>)

    const messagesElements = messages.map((msg) => <Message message={msg.message} key={msg.id}/>)

    const onAddPost = () => {
        const newText = textRef.current.value
        alert(newText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.messageArea}>
                <textarea ref={textRef} placeholder="Add a new message.." cols="30" rows="5">
                </textarea>
                    <button onClick={onAddPost} className={`${style.btn} ${style.btn1}`}>Add post</button>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;