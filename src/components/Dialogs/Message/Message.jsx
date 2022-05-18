import s from "../Dialogs.module.css";
import React from "react";

export const Message = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}
