import React from 'react';
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = ({store}) => {
//
//     let state = store.getState().dialogsPage
//
//     const onSendMessage = () => {
//         store.dispatch(addMessageActionCreator())
//     }
//
//     const onMessageChange = (newText) => {
//         store.dispatch(updateMessageActionCreator(newText))
//     }
//
//     return (
//         <Dialogs addMessage={onSendMessage}
//                  updateMessageText={onMessageChange}
//                  dialogsPage={state}
//         />
//     );
// };

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateMessageText: (newText) => {
            dispatch(updateMessageActionCreator(newText))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer