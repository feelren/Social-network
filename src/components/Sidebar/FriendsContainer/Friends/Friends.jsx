import React from "react";
import s from "./Friends.module.css";

const Friends = (props) => {
    return (
        <div className={s.wrapper}>
            {props.friendsElements}
        </div>
    )
};

export default Friends;
