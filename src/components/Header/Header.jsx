import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
    let { email, login } = useSelector(state => state.auth);
    let isLogined = useSelector(state => state.auth.isLogined);

    return (
        <header className={s.header}>
            <img className={s.img} src="https://cdn.worldvectorlogo.com/logos/principle-app-2.svg" alt="logo" />

            {
                isLogined ?
                    <div className={s.logined}>
                        <div>Your login: <span>{login}</span></div>
                        <div>{email}</div>
                    </div>
                    : <NavLink to='/login' >Click to log in</NavLink>
            }

        </header>
    );
};

export default Header;