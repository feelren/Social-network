import React from "react";
import { addMessageActionCreator, changeMessageTextActionCreator } from "../../../../redux/dialogs-reducer";
import s from "./MessageForm.module.css";



const MessageForm = (props) => {
    let textarea = React.createRef();

    let changeMessageText = () => {
        let text = textarea.current.value;
        props.dispatch(changeMessageTextActionCreator(text));
    }

    let addMessage = () => props.dispatch(addMessageActionCreator());

    return (
        <div className={s.form}>
            <textarea className={s.textarea} value={props.state} rows="3" ref={textarea} onChange={changeMessageText}></textarea>
            <button onClick={addMessage}>Отправить</button>
        </div>
    )
};

export default MessageForm;
