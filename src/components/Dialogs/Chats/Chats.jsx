import React from "react";
import s from "./Chats.module.css";

const Chat = (props) => {
    return <div className={s.chat_item}>{props.message}</div>;
};

const Chats = (props) => {
    let chatsElements = props.chatsData.map((c) => <Chat id={c.id} message={c.message} />);
    return <div className={s.chat}>{chatsElements}</div>;
};

export default Chats;
