import React from "react";
import s from "./Sidebar.module.css";
import Navigation from "./Navigation/Navigation";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
    return (
        <aside className={s.aside}>
            <Navigation />
            <Friends state={props.state} />
        </aside>
    );
};

export default Sidebar;
