import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export const DialogItem = ({id, name, ava}) => {
    return (
        <div className={`${s.dialog} ${s.activeLink}`}>
            <div className={s.container}>
                <img src={ava} alt='people avatar' className={s.avatar}/>
                <NavLink to={`/dialogs/${id}`} className={({isActive}) => isActive ? s.activeLink : ''}>
                    {name}
                </NavLink>
            </div>
        </div>
    )
}