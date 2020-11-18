import React from "react";
import s from "./Chats.module.css";
import MessageForm from "./MessageForm/MessageForm";

const Chat = (props) => {
    return <div className={s.chat_item}>{props.message}</div>;
};

const Chats = (props) => {
    let chatsElements = props.state.chatsData.map((c) => <Chat id={c.id} message={c.message} />);
    return (
        <div className={s.wrapper}>
            <div className={s.chat}>{chatsElements}</div>
            <MessageForm state={props.state.newText} dispatch={props.dispatch} />
        </div>
    );
};

export default Chats;
