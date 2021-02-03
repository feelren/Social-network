import React from "react";
import s from "./PostsList.module.css";
import catAvatar from '../../../images/cat_avatar.jpg'

const PostsList = props => {
    return (
        <div className={s.posts}>
            {
                props.postsData.map(post => {
                    return (
                        <section className={s.post} key={post.id}>
                            <div className={s.container_left}>
                                <img
                                    className={s.img}
                                    src={props.currentProfile.photos.large ? props.currentProfile.photos.large : catAvatar}
                                    alt="картинка"
                                />
                                <p className={s.text}>{post.text}</p>
                            </div>
                            <div className={s.container_right}>
                                <div className={s.likes}>{post.likes} likes</div>
                            </div>
                        </section>
                    )
                })
            }
        </div >
    )
};

export default PostsList;
