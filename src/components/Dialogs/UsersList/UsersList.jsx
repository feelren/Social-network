import React from "react";
import s from './UsersList.module.css'
import { NavLink } from "react-router-dom";

const User = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <NavLink className={s.wrapper} id={props.id} to={path}>
            <img src={props.src} alt="аватарка" />
            <p>{props.name}</p>
        </NavLink>
    );
};


const UsersList = (props) => {
    let usersElements = props.state.map((item) => <User id={item.id} name={item.name} src={item.src} />);

    return <nav>{usersElements}</nav>;
};

export default UsersList;
