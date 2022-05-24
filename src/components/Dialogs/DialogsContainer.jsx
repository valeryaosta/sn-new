import React from 'react';
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({store}) => {

    let state = store.getState().dialogsPage

    const onSendMessage = () => {
        store.dispatch(addMessageActionCreator())
    }

    const onMessageChange = (newText) => {
        store.dispatch(updateMessageActionCreator(newText))
    }

    return (
        <Dialogs addMessage={onSendMessage}
                 updateMessageText={onMessageChange}
                 dialogsPage={state}
        />
    );
};

export default DialogsContainer;