import React from "react";
import s from "./Names.module.css";
import { NavLink } from "react-router-dom";
import { addNameActionCreator } from "../../../redux/dialogs-reducer";

const Name = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <NavLink className={s.wrapper} id={props.id} to={path}>
            <img src={props.src} alt="аватарка" />
            <p>{props.name}</p>
        </NavLink>
    );
};



const Names = (props) => {
    let namesElements = props.state.map((item) => <Name id={item.id} name={item.name} src={item.src} />);
    let name = React.createRef();
    let src = React.createRef();

    let addName = function (text, ref) {
        text = name.current.value;
        ref = src.current.value;
        props.dispatch(addNameActionCreator(text, ref));
    };

    return (
        <div className={s.wrap}>
            <nav>{namesElements}</nav>
            <input type="text" placeholder='Введите имя' ref={name} />
            <input type="text" placeholder='Ссылка на фото' ref={src} />
            <button type="submit" onClick={addName}>
                Создать
            </button>
        </div>
    );
};

export default Names;
