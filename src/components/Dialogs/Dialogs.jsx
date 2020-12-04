import React from "react";
import s from "./Dialogs.module.css";
import ChatsContainer from "./ChatsContainer/ChatsContainer";
import SplitLine from './SplitLine/SplitLine'
import UsersContainer from "./UsersList/UsersList";

const Dialogs = (props) => {
    return (
        <div className={s.wrapper}>
            <header className={s.header}>Мои сообщения</header>
            <hr />
            <div className={s.content}>
                <UsersContainer state={props.state.namesData} dispatch={props.dispatch} />
                <SplitLine />
                <ChatsContainer state={props.state} dispatch={props.dispatch} />
            </div>
        </div>
    );
};

export default Dialogs;
