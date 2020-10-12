import React from 'react';
import s from './nav.module.css';

export function Nav() {
    return (
        <div className={s.nav}>
            <a href="#">Homepage</a>
            <a href="#">Projects</a>
            <a href="#">Skills</a>
            <a href="#">Contacts</a>
        </div>
    );
}

