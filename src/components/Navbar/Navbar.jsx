import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={`${s.item} ${s.activeLink}`}>
                    <NavLink to='/profile' className={({isActive}) => isActive ? s.activeLink : ''}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/dialogs' className={({isActive}) => isActive ? s.activeLink : ''}>Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/news' className={({isActive}) => isActive ? s.activeLink : ''}>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/music' className={({isActive}) => isActive ? s.activeLink : ''}>Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/settings' className={({isActive}) => isActive ? s.activeLink : ''}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;