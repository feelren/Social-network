import React from "react";
import { addPostActionCreator, changePostTextActionCreator } from "../../../redux/state";
import s from "./PostAdd.module.css";



const PostAdd = (props) => {
    let textarea = React.createRef();


    let addPost = () => props.dispatch(addPostActionCreator());

    function changeText(text) {
        text = textarea.current.value;
        props.dispatch(changePostTextActionCreator(text));
    }


    return (
        <div className={s.wrapper}>
            <p>Добавьте пост</p>
            <textarea className={s.textarea} value={props.state.newText} id='textarea' ref={textarea} rows="5" onChange={changeText}></textarea>
            <button onClick={addPost}>Показать</button>
        </div>
    );
};

export default PostAdd;
