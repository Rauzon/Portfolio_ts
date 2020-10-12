import React from 'react';
import s from './header.module.css';
import { Nav } from '../nav/Nav';

export function Header() {
    return (
        <div className={s.header}>
            <div className={s.header_wrapper}>
                <Nav />
            </div>
        </div>
    );
}

