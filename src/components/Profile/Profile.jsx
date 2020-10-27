import React from "react";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import PostAdd from "./PostAdd/PostAdd";

const Profile = (props) => {
    return (
        <main className={s.wrapper}>
            <PostAdd newText={props.state.newText} addPost={props.addPost} changePostText={props.changePostText} />
            <Posts postsData={props.state.postsData} />
        </main>
    );
};

export default Profile;
