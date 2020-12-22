import React from "react";
import s from "./PostsList.module.css";


const PostsList = (props) => {

    return (
        <div className={s.posts}>
            {props.state}
        </div>
    );
};

export default PostsList;
