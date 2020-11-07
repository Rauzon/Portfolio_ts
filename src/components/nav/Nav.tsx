import React from 'react';
import s from './nav.module.css';

export function Nav() {
    return (
        <>
            <input id={s.menu__toggle} type={"checkbox"}/>
            <label className={s.menu__btn} htmlFor={s.menu__toggle}>
                <span></span>
            </label>
            <div className={s.nav}>
                <a href="#">Homepage</a>
                <a href="#">Projects</a>
                <a href="#">Skills</a>
                <a href="#">Contacts</a>
            </div>
            <div className={s.nav__burgerBtn_block}></div>
        </>
    );
}

