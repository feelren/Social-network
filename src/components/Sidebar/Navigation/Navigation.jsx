import React from "react";
import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";


const Navigation = () => {

    return (
        <nav className={s.nav}>
            <NavLink to="/profile" className={s.item} activeClassName={s.active}>
                Мой профиль
            </NavLink>
            <NavLink to="/users" className={s.item} activeClassName={s.active}>
                Пользователи
            </NavLink>
            <NavLink to="/dialogs" className={s.item} activeClassName={s.active}>
                Мои сообщения
            </NavLink>
            <NavLink to="/news" className={s.item} activeClassName={s.active}>
                Новости
            </NavLink>
            <NavLink to="/music" className={s.item} activeClassName={s.active}>
                Моя музыка
            </NavLink>
            <NavLink to="/settings" className={s.item} activeClassName={s.active}>
                Настройки
            </NavLink>
        </nav>
    );
};

export default Navigation;
