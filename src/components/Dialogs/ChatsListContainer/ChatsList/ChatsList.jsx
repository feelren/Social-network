import React from "react";
import s from "./ChatsList.module.css";

const ChatsList = (props) => {
    return (
        <div className={s.wrapper}>
            {
                props.chats.map(chat => {
                    return (
                        <div className={s.message} key={chat.id}>{chat.message}</div>
                    )
                })
            }
        </div>
    )
};

export default ChatsList;
