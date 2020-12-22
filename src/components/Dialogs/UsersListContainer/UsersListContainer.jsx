import React from "react";
import s from './UsersList/UsersList.module.css'
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import UsersList from "./UsersList/UsersList";

const User = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <NavLink className={s.wrapper} id={props.id} to={path}>
            <img src={props.src} alt="аватарка" />
            <p>{props.name}</p>
        </NavLink>
    );
};


let mapStateToProps = (state) => {
    return {
        usersElements: state.dialogs.namesData.map((item) => <User id={item.id} name={item.name} src={item.src} />)
    };
}

const UsersListContainer = connect(mapStateToProps, null)(UsersList);




export default UsersListContainer;
