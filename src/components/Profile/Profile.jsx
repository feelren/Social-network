import React from "react";
import PostAddForm from "./PostAddFormContainer/PostAddForm/PostAddForm";
import PostsList from "./PostsList/PostsList";
import UserInfo from "./UserInfo/UserInfo";


const Profile = (props) => {
    return (
        <main>
            <UserInfo {...props} />
            <PostAddForm {...props} />
            <PostsList {...props} />
        </main>
    );
};

export default Profile;
