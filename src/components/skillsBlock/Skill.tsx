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
            <div className={s.skill__icon}>
                <img src={props.icon} alt={props.title}/>
            </div>
            <h3 className={s.skill__title}>
                <a href="#">
                    {props.title}
                </a>
            </h3>
            <p className={s.skill__content}>{props.description}</p>

        </div>
    );
}

