import React from "react";
import s from "./PostAdd.module.css";

const PostAdd = (props) => {
    let textarea = React.createRef();


    let addPost = () => props.addPost();

    function changeText(text) {
        text = textarea.current.value;
        console.log(text);
        props.changePostText(text);
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
