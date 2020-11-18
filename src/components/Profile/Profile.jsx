import React from "react";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import PostAdd from "./PostAdd/PostAdd";

const Profile = (props) => {
    return (
        <main className={s.wrapper}>
            <PostAdd state={props.state} dispatch={props.dispatch} />
            <Posts state={props.state} />
        </main>
    );
};

export default Profile;
 