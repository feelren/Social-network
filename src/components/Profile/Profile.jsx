import React from "react";
import s from "./Profile.module.css";
import Post from "./Post/Post";
import PostAdd from "./PostAdd/PostAdd";

const Profile = (props) => {
    return (
        <main className={s.wrapper}>
            <PostAdd />
            <Post postsData={props.state.postsData} />
        </main>
    );
};

export default Profile;
