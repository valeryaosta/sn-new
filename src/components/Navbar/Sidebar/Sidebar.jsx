import React from 'react';
import s from "../Navbar.module.css";
import {connect} from "react-redux";

const Sidebar = ({sidebar}) => {
    return (
        <div className={s.friendsWrapper}>
            <p>My Friends</p>
            <ul className={s.listFr}>
                {sidebar.map((fr) => {
                    return <li key={fr.id}><img src={fr.ava} alt='friend avatar'/> {fr.name} </li>
                })}
            </ul>
        </div>
    );
};

export default Sidebar;

const mapDispatchToProps = (state) => {
    return {
        sidebar: state.sidebar.friends
    }
}

export const SidebarContainer = connect(mapDispatchToProps)(Sidebar)