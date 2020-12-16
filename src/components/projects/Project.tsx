import React from 'react';
import s from './project.module.css';

type PropsType = {
    projectName: string
    projectLink: string
    id: string
}

export function Project({id,...props}: PropsType) {

    return (
        <div className={(id === 'one') ? `${s.project} ${s.one}` : `${s.project} ${s.two}`}>
            <div className={s.project__icon}>
                <div className={s.project__icon_link}>
                    <a href={props.projectLink} target={'_blank'}>{props.projectName}</a>
                </div>
            </div>
        </div>
    );
}

