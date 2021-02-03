import React from 'react'
import s from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={s.wrapper}>
            <span>Loading..</span>
        </div>
    )
}

export default Preloader;