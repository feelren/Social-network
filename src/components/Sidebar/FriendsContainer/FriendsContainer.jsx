import React from "react";
import s from "./Friends/Friends.module.css";
import Friends from "./Friends/Friends";
import { connect } from "react-redux";

const FriendElement = (props) => {
    return (
        <div className={s.item_wrapper}>
            <img src={props.src} alt="ava" />
            <p>{props.name}</p>
        </div>
    );
};


let mapStateToProps = (state) => {
    let friendsElements = state.dialogs.namesData.map((el) => <FriendElement src={el.src} name={el.name} />);

    return {
        friendsElements: friendsElements,
    };
}


const FriendsContainer = connect(mapStateToProps, null)(Friends);

export default FriendsContainer;