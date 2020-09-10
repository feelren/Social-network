import React from "react";
import s from "./PostAdd.module.css";

let textarea = React.createRef();

function alertPost() {
    let text = textarea.current.value;
    alert(text);
}

const PostAdd = (props) => {
    return (
        <div className={s.wrapper}>
            <p>Добавьте пост</p>
            <textarea className={s.textarea} ref={textarea} rows="5"></textarea>
            <button onClick={alertPost}>Показать</button>
        </div>
    );
};

export default PostAdd;
