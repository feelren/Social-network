import React from "react";
import s from "./Dialogs.module.css";
import ChatsListContainer from "./ChatsListContainer/ChatsListContainer";
import SplitLine from './SplitLine/SplitLine'
import AddMessageFormContainer from "./AddMessageFormContainer/AddMessageFormContainer";
import InterlocutorsContainer from "./InterlocutorsContainer/InterlocutorsContainer";

const Dialogs = () => {
    return (
        <div className={s.wrapper}>
            <header className='title'>Мои сообщения</header>
            <div className={s.content}>
                <InterlocutorsContainer />
                <SplitLine />
                <ChatsListContainer />
            </div>
            <AddMessageFormContainer />
        </div >
    )
};

export default Dialogs;
