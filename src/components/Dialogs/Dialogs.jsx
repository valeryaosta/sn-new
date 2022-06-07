import React from 'react';
import s from './Dialogs.module.css'
import style from '../Profile/MyPosts/MyPosts.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


const Dialogs = ({dialogs, messages, addMessage, isAuth}) => {
    const dialogsElements = dialogs.map((d) => <DialogItem id={d.id} name={d.name} key={d.id} ava={d.ava}/>)
    const messagesElements = messages.map((msg) => <Message message={msg.message} key={msg.id}/>)

    const submit = (values) => {
        // console.log(values.newMessageBody)
        addMessage(values.newMessageBody)
    }

    if (!isAuth) {
        return <Navigate to="/login" replace/>
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageReduxForm onSubmit={submit}/>
            </div>
        </div>
    );
};

export default Dialogs;


export const AddMessageForm = (props) => {
    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit} className={s.messageArea}>
            <Field name='newMessageBody'
                   component='textarea'
                   placeholder="Add a new message.."
                   cols="100" rows="4"
            />
            <button className={`${style.btn} ${style.btn1}`}>Add post</button>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'addMessageForm'})(AddMessageForm)

