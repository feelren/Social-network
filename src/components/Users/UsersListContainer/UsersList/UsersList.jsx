import React from 'react'
import s from './UsersList.module.css'
import catAvatar from '../../../../images/cat_avatar.jpg'
import { NavLink } from 'react-router-dom';

const UsersList = props => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.usersPerPage);

    let pages = [];
    for (let i = 1; i <= 10; i++) {              //Здесь i <= 10 потому что юзеров под 10к. Решено взять 10 первых страниц для адекватного отображения
        pages.push(i);
    }

    return (

        <div className={s.wrapper}>
            <div>
                Пользователей всего: {props.totalUsersCount}
            </div>
            <div>
                Страниц нужно: {pagesCount}
            </div>

            <header className='title'>Пользователи</header>
            {
                props.users.map(user => {
                    return (
                        <div className={s.user_wrapper} key={user.id}>
                            <div className={s.user_photo}>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={user.photos.small ? user.photos.small : catAvatar} alt='фото пользователя' />
                                </NavLink>
                                {
                                    user.followed
                                        ? <button className={s.unsubscribe_button} disabled={props.isInProgress} onClick={() => props.unfollowTC(user.id)}>Отписаться</button>
                                        : <button className={s.subscribe_button} disabled={props.isInProgress} onClick={() => props.followTC(user.id)}>Подписаться</button>
                                }
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
            <div className={s.pageNumbers}>
                {
                    pages.map(page => {
                        return <div className={(props.currentPage === page) ? s.selectedPage : undefined} key={page} onClick={() => props.changePageTC(page, props.usersPerPage)}>{page} </div>
                    })
                }
            </div>
        </div >
    )
}

export default UsersList;