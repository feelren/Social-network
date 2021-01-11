import React from 'react'
import * as axios from 'axios'
import s from './UsersList.module.css'
import catAvatar from '../../../../images/cat_avatar.jpg'


class UsersList extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            });
    }

    onPageChange = (pageMoveTo) => {
        this.props.changeCurrentPage(pageMoveTo);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageMoveTo}&count=${this.props.usersPerPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.usersPerPage);

        let pages = [];
        for (let i = 1; i <= 10; i++) {              //Здесь i <= 10 потому что страниц больше 4000. Решено взять 10 первых для красоты :)
            pages.push(i);
        }


        return (
            <div className={s.wrapper}>
                <div>
                    Пользователей всего: {this.props.totalUsersCount}
                </div>
                <div>
                    Страниц нужно: {pagesCount}
                </div>

                <header class='title'>Пользователи</header>
                {
                    this.props.users.map(user => {
                        return (
                            <div className={s.user_wrapper} key={user.id}>
                                <div className={s.user_photo}>
                                    <img src={user.photos.small ? user.photos.small : catAvatar} alt='фото пользователя' />
                                    {(user.followed ? <button className={s.unsubscribe_button} onClick={() => this.props.unfollow(user.id)} >Отписаться</button> : <button className={s.subscribe_button} onClick={() => this.props.follow(user.id)} >Подписаться</button>)}
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
                            return <div className={(this.props.currentPage === page) ? s.selectedPage : undefined} onClick={() => this.onPageChange(page)}>{page} </div>
                        })
                    }
                </div>
            </div >
        )
    }
}

export default UsersList;