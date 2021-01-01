import React from "react";
import PostsListContainer from "./PostsListContainer/PostsListContainer";
import PostAddFormContainer from "./PostAddFormContainer/PostAddFormContainer";


const Profile = () => {
    return (
        <main>
            <PostAddFormContainer />
            <PostsListContainer />
        </main>
    );
};

export default Profile;
