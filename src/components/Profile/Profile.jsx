import React from "react";
import s from "./Profile.module.css";
import PostsListContainer from "./PostsListContainer/PostsListContainer";
import PostAddFormContainer from "./PostAddFormContainer/PostAddFormContainer";


const Profile = () => {
    return (
        <main className={s.wrapper}>
            <PostAddFormContainer />
            <PostsListContainer />
        </main>
    );
};

export default Profile;
