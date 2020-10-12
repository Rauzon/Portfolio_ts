import React from 'react';
import s from './main.module.css';

export function Main() {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.main__text}>
                    <span>Hi people</span>
                    <h1>My name is Vlad Aharodnikov</h1>
                    <span>And I'm a Frontend Developer</span>
                </div>
                <div className={s.main__photo}>
                    Photo
                </div>
            </div>
        </div>
    );
}

