import React from "react";
import s from "./Dialogs.module.css";
import ChatsListContainer from "./ChatsListContainer/ChatsListContainer";
import SplitLine from './SplitLine/SplitLine'
import AddMessageFormContainer from "./AddMessageFormContainer/AddMessageFormContainer";
import InterlocutorsContainer from "./InterlocutorsContainer/InterlocutorsContainer";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Dialogs = () => {
    let isLogined = useSelector((state) => state.auth.isLogined);

    if (!isLogined) return <Redirect to="/login" />

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
