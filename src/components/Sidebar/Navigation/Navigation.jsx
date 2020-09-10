import React from "react";
import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="/dialogs" className={s.item} activeClassName={s.active}>
                Сообщения
            </NavLink>
            <NavLink to="/profile" className={s.item} activeClassName={s.active}>
                Профиль
            </NavLink>
            <NavLink to="/news" className={s.item} activeClassName={s.active}>
                Новости
            </NavLink>
            <NavLink to="/music" className={s.item} activeClassName={s.active}>
                Музыка
            </NavLink>
            <NavLink to="/settings" className={s.item} activeClassName={s.active}>
                Настройки
            </NavLink>
        </nav>
    );
};

export default Navigation;
