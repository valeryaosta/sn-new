import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export const DialogItem = ({id, name}) => {
    return (
        <div className={`${s.dialog} ${s.activeLink}`}>
            <NavLink to={`/dialogs/${id}`} className={({isActive}) => isActive ? s.activeLink : ''}>{name}</NavLink>
        </div>
    )
}