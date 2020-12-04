import React from "react";
import { addMessageActionCreator, changeMessageTextActionCreator } from "../../../redux/dialogs-reducer";
import s from "./ChatsContainer.module.css";
import ChatsList from "./ChatsList/ChatsList";
import MessageForm from "./MessageForm/MessageForm";



const ChatsContainer = (props) => {

    let changeMessageText = (text) => {
        props.dispatch(changeMessageTextActionCreator(text));
    };

    let addMessage = () => props.dispatch(addMessageActionCreator());

    return (
        <div className={s.wrapper}>
            <ChatsList state={props.state.chatsData} />
            <MessageForm newText={props.state.newText} changeMessageText={changeMessageText} addMessage={addMessage} />
        </div>
    );
};

export default ChatsContainer;
