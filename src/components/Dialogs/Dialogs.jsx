import React from "react";
import s from "./Dialogs.module.css";
import ChatsContainer from "./ChatsContainer/ChatsContainer";
import SplitLine from './SplitLine/SplitLine'
import UsersListContainer from "./UsersListContainer/UsersListContainer";
import AddMessageFormContainer from "./AddMessageFormContainer/AddMessageFormContainer";

const Dialogs = () => {
    return (
        <div className={s.wrapper}>
            <header className={s.header}>Мои сообщения</header>
            <div className={s.content}>
                <UsersListContainer />
                <SplitLine />
                <ChatsContainer />
            </div>
            <AddMessageFormContainer />
        </div >
    )
};

export default Dialogs;
