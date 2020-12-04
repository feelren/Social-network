import React from "react";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import PostAddFormContainer from "./PostAddFormContainer/PostAddFormContainer";


const Profile = (props) => {
    return (
        <main className={s.wrapper}>
            <PostAddFormContainer state={props.state} dispatch={props.dispatch} />
            <Posts state={props.state} />
        </main>
    );
};

export default Profile;
