import React from "react";
import s from "./ChatsList/ChatsList.module.css";
import ChatsList from "./ChatsList/ChatsList";
import { connect } from "react-redux";

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>;
};



let mapStateToProps = state => {
    console.log(state.dialogs.namesData);
    let chatsElements = state.dialogs.chatsData.map((c) => <Message id={c.id} message={c.message} />);
    return {
        chatsElements: chatsElements,
    }
}

const ChatsContainer = connect(mapStateToProps, null)(ChatsList)


export default ChatsContainer;
