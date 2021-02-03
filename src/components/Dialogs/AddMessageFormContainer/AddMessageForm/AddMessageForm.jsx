import React from "react";
import s from './AddMessageForm.module.css'


const AddMessageForm = (props) => {
    let textarea = React.createRef();

    let changeMessageText = () => {
        let text = textarea.current.value;
        props.changeMessageText(text);
    };

    let addMessage = () => {
        props.addMessage();
    };


    return (
        <div className={s.wrapper}>
            <textarea className={s.textarea} rows="1" ref={textarea} value={props.state} onChange={changeMessageText}></textarea>
            <button className={s.button} onClick={addMessage}>Отправить</button>
        </div>

    )
}

export default AddMessageForm;
