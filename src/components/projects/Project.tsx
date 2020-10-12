import React from 'react';
import s from './project.module.css';

type PropsType = {
    title: string
    description: string
}

export function Project(props: PropsType) {
    return (
        <div className={s.project}>
            <div className={s.project__icon}>
                <div className={s.project__icon_btn}><button>Show</button></div>
            </div>
            <div className={s.project__text}>
                <h4 className={s.project__text_title}>{props.title}</h4>
                <span>{props.description}</span>
            </div>
        </div>
    );
}

