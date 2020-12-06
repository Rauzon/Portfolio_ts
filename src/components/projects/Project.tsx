import React from 'react';
import s from './project.module.css';

type PropsType = {
    projectName: string
    projectLink: string
}

export function Project(props: PropsType) {
    return (
        <div className={s.project}>
            <div className={s.project__icon}>
                <div className={s.project__icon_link}>
                    <a href={props.projectLink} target={'_blank'}>{props.projectName}</a>
                </div>
            </div>
        </div>
    );
}

