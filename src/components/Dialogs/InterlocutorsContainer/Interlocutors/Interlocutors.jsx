import React from "react";
import { NavLink } from "react-router-dom";
import * as axios from 'axios'
import s from './Interlocutors.module.css'
import catAvatar from '../../../../images/cat_avatar.jpg'

const Interlocutors = (props) => {

    if (props.usersData.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items);
            });
    }

    return (
        <div>
            {
                props.usersData.map(user => {
                    let path = "/dialogs/" + user.id;
                    return (

                        <div className={s.wrapper} key={user.id}>
                            <NavLink className={s.user} key={user.id} to={path}>
                                <img src={user.photos.small ? user.photos.small : catAvatar} alt="аватарка" />
                                <p>{user.name}</p>
                            </NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
};


export default Interlocutors;
