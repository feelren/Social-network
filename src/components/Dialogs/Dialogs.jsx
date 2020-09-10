import React from "react";
import s from "./Dialogs.module.css";
import Names from "./Names/Names";
import Chats from "./Chats/Chats";

const Dialogs = (props) => {
    return (
        <div className={s.wrapper}>
            <header className={s.header}>Мои сообщения</header>
            <hr />
            <div className={s.content}>
                <Names namesData={props.state.namesData} addName={props.addName} />
                <div className={s.splitLine}></div>
                <Chats chatsData={props.state.chatsData} />
            </div>
        </div>
    );
};

export default Dialogs;
