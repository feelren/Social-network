import React from "react";
import s from "./ChatsList.module.css";

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>;
};

const ChatsList = (props) => {
    let chatsElements = props.state.map((c) => <Message id={c.id} message={c.message} />);

    return <div className={s.wrapper}>{chatsElements}</div>;
};

export default ChatsList;
