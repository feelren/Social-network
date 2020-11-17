import React from "react";
import s from "./Dialogs.module.css";
import Names from "./Names/Names";
import Chats from "./Chats/Chats";
import SplitLine from './SplitLine/SplitLine'

const Dialogs = (props) => {
    return (
        <div className={s.wrapper}>
            <header className={s.header}>Мои сообщения</header>
            <hr />
            <div className={s.content}>
                <Names state={props.state.namesData} dispatch={props.dispatch} />
                <SplitLine />
                <Chats state={props.state.chatsData} />
            </div>
        </div>
    );
};

export default Dialogs;
