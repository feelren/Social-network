import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img className={s.img} src="https://cdn.worldvectorlogo.com/logos/principle-app-2.svg" alt="logo" />
            {
                props.login ?
                    <div className={s.logined}>
                        <div>Your login: <span>{props.login}</span></div>
                        <div>{props.email}</div>
                    </div>
                    : <NavLink to='/login' >Click to log in</NavLink>
            }
        </header>
    );
};

export default Header;