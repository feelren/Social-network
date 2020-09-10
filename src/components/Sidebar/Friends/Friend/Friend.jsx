import React from "react";
import s from "./Friend.module.css";

const Friend = (props) => {
    return (
        <div className={s.wrapper}>
            <img src={props.src} alt="avatarka" />
            <p>{props.name}</p>
        </div>
    );
};

export default Friend;
