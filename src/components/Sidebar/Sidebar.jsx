import React from "react";
import s from "./Sidebar.module.css";
import Navigation from "./Navigation/Navigation";

const Sidebar = () => {
    return (
        <aside className={s.aside}>
            <Navigation />
        </aside>
    )
};

export default Sidebar;
