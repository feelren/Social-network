import React from "react";
import s from "./PostAddForm.module.css";


const PostAddForm = (props) => {
    let textarea = React.createRef();

    let addPost = () => props.addPost();

    let changeText = text => {
        text = textarea.current.value;
        props.changeText(text);
    };

    return (
        <div className={s.wrapper}>
            <header className='title'>Добавьте пост</header>
            <textarea className={s.textarea} value={props.state} id='textarea' ref={textarea} rows="5" onChange={changeText}></textarea>
            <button onClick={addPost}>Показать</button>
        </div>
    );
};

export default PostAddForm;
