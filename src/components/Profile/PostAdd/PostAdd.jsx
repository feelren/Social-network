import React from "react";
import s from "./PostAdd.module.css";

const PostAdd = (props) => {
    let textarea = React.createRef();


    let addPost = () => props.dispatch({ type: 'ADD-POST' });

    function changeText(text) {
        text = textarea.current.value;
        props.dispatch({
            type: 'CHANGE-POST-TEXT',
            text: text,
        });
    }


    return (
        <div className={s.wrapper}>
            <p>Добавьте пост</p>
            <textarea className={s.textarea} value={props.newText} id='textarea' ref={textarea} rows="5" onChange={changeText}></textarea>
            <button onClick={addPost}>Показать</button>
        </div>
    );
};

export default PostAdd;
