import React from 'react';
import s from './Header.module.css'
import st from '../Login/Login.module.css'
import {NavLink} from "react-router-dom";
import jsLogo from '../../assets/jslogo.png'


const Header = ({login, logout, isAuth}) => {

    const onLogout = () => {
        logout()
    }

    return (
        <header className={s.header}>
            <img src={jsLogo}
                 alt='js logo'/>

            <div className={s.loginBlock}>
                {isAuth
                    ? <div> {login} &nbsp;
                        <button onClick={onLogout} className={st.btn}>Logout</button>
                    </div>
                    : <div>
                        <NavLink to='/login' className={st.btn}>Login</NavLink>
                    </div>
                }
            </div>
        </header>

    );
};

export default Header;