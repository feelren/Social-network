import React from "react";
import s from "./Dialogs.module.css";
import ChatsContainer from "./ChatsContainer/ChatsContainer";
import SplitLine from './SplitLine/SplitLine'
import UsersListContainer from "./UsersListContainer/UsersListContainer";

const Dialogs = () => {
    return (
        <div className={s.wrapper}>
            <header className={s.header}>Мои сообщения</header>
            <div className={s.content}>
                <UsersListContainer />
                <SplitLine />
                <ChatsContainer />
            </div>
        </div >
    )
};

export default Dialogs;
