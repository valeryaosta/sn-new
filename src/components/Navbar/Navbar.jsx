import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = ({friends}) => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={`${s.item} ${s.activeLink}`}>
                    <NavLink to='/profile'
                             className={({isActive}) => isActive ? s.activeLink : ''}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/dialogs'
                             className={({isActive}) => isActive ? s.activeLink : ''}>Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/news' className={({isActive}) => isActive ? s.activeLink : ''}>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/music' className={({isActive}) => isActive ? s.activeLink : ''}>Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/settings'
                             className={({isActive}) => isActive ? s.activeLink : ''}>Settings</NavLink>
                </li>
            </ul>

            <div className={s.friendsWrapper}>
                <p>My Friends</p>
                <ul className={s.listFr}>
                    {friends.map((fr) => {
                        return <li key={fr.id}><img src={fr.ava} alt='friend avatar'/> {fr.name} </li>
                    })}
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;