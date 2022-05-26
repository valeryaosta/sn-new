import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {SidebarContainer} from "./Sidebar/Sidebar";

const Navbar = () => {
    const setActiveClass = ({isActive}) => isActive ? s.activeLink : ''

    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={`${s.item} ${s.activeLink}`}>
                    <NavLink to='/profile' className={setActiveClass}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/dialogs' className={setActiveClass}>Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/users' className={setActiveClass}>Users</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/news' className={setActiveClass}>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/music' className={setActiveClass}>Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/settings' className={setActiveClass}>Settings</NavLink>
                </li>
            </ul>
            <SidebarContainer/>
        </nav>
    );
};

export default Navbar;