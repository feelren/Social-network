import * as axios from 'axios'
import React from 'react'
import s from './UsersList.module.css'
import catAvatar from '../../../../images/cat_avatar.jpg'

const UsersList = props => {

    if (props.users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items);
            });
    }

    return (
        <div className={s.wrapper}>
            <header class='title'>Пользователи</header>
            {
                props.users.map(user => {
                    return (
                        <div className={s.user_wrapper} key={user.id}>
                            <div className={s.user_photo}>
                                <img src={user.photos.small ? user.photos.small : catAvatar} alt='фото пользователя' />
                                {(user.followed ? <button className={s.unsubscribe_button} onClick={() => props.unfollow(user.id)} >Отписаться</button> : <button className={s.subscribe_button} onClick={() => props.follow(user.id)} >Подписаться</button>)}
                            </div>
                            <div className={s.user_content}>
                                <div className={s.user_content_left}>
                                    <p className={s.user_name}>{user.name}</p>
                                    <p className={s.user_status}>{user.status}</p>
                                </div>
                                <div className={s.user_content_right}>
                                    <p className={s.user_city}>{'Город'},</p>
                                    <p className={s.user_country}>{'Страна'}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    );
}

export default UsersList;