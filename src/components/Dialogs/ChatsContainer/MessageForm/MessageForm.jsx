import React from "react";
import s from "./MessageForm.module.css";

const MessageForm = (props) => {
    let textarea = React.createRef();

    let changeMessageText = () => {
        let text = textarea.current.value;
        props.changeMessageText(text);
    };

    let addMessage = () => props.addMessage();

    return (
        <div className={s.form}>
            <textarea className={s.textarea} value={props.newText} rows="3" ref={textarea} onChange={changeMessageText}></textarea>
            <button onClick={addMessage}>Отправить</button>
        </div>
    )
};

export default MessageForm;
