import React from "react";
import s from './UserInfo.module.css'
import catAvatar from '../../../images/cat_avatar.jpg'



const UserInfo = (props) => {
    let user = props.currentProfile;

    let contactsArray = [];
    for (let key in user.contacts) {
        contactsArray.push({
            key: key,
            value: user.contacts[key]
        });
    }


    return (
        <div className={s.wrapper}>
            <div className={s.photo}>
                <img src={user.photos.large ? user.photos.large : catAvatar} alt="" />
            </div>
            <div className={s.info}>
                <h3>{user.fullName}</h3>
                <p>{user.lookingForAJobDescription}</p>
                <hr />
                <div className={s.contacts}>
                    {
                        contactsArray.map((item, index) => {
                            return (
                                <div className={s.contact_wrapper} key={index}>
                                    <div className={s.contacts_key}>{item.key}:</div>
                                    {
                                        item.value
                                            ? <a href={item.value} className={s.contacts_value}>{item.value}</a>
                                            : 'пусто'
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
