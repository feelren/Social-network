import React from "react";
import s from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendsElements = props.state.map((el) => <Friend src={el.src} name={el.name} />);

    return <div className={s.wrapper}>{friendsElements}</div>;
};
export default Friends;