import React from "react";
import { addPostActionCreator, changePostTextActionCreator } from "../../../redux/profile-reducer";
import PostAddForm from "./PostAddForm/PostAddForm";


const PostAddFormContainer = (props) => {

    let addPost = () => props.dispatch(addPostActionCreator());

    function changeText(text) {
        props.dispatch(changePostTextActionCreator(text));
    }

    return <PostAddForm value={props.state.newText} changeText={changeText} addPost={addPost} />
};

export default PostAddFormContainer;
