import React from "react";
import s from "./PostAddForm.module.css";


const PostAddForm = (props) => {
    let textarea = React.createRef();

    let addPost = () => props.addPost();

    let changePostText = text => {
        text = textarea.current.value;
        props.changePostText(text);
    };

    return (
        <div className={s.wrapper}>
            <textarea className={s.textarea} value={props.newText} id='textarea' ref={textarea} rows="2" onChange={changePostText}></textarea>
            <button onClick={addPost}>Добавить пост</button>
        </div>
    );
};

export default PostAddForm;
