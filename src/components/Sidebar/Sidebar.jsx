import React from "react";
import s from "./Sidebar.module.css";
import Navigation from "./Navigation/Navigation";
import FriendsContainer from "./FriendsContainer/FriendsContainer";

const Sidebar = () => {
    return (
        <aside className={s.aside}>
            <Navigation />
            <FriendsContainer />
        </aside>
    )
};

export default Sidebar;
