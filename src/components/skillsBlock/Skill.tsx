import React from 'react';
import s from './skill.module.css';

type PropsType = {
    title: string
    description: string
    icon?: string
}


export function Skill(props: PropsType) {
    return (
        <div className={s.skill}>
            <div className={s.skill__icon}>{props.icon}</div>
            <h2 className={s.skill__title}>{props.title}</h2>
            <span className={s.skill__content}>{props.description}</span>

        </div>
    );
}

