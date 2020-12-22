import React from "react";
import s from "./ChatsList.module.css";

const ChatsList = (props) => {
    return (
        <div className={s.wrapper}>
            {props.chatsElements}
        </div>
    )
};

export default ChatsList;
