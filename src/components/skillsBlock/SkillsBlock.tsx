import React from 'react';
import s from './skillsBlock.module.css';
import { Skill } from './Skill';
import { SkillsDataType } from './SkillsBlockContainer';

type PropsType = {
    skills: SkillsDataType[]
}

export function SkillsBlock(props: PropsType) {
    return (
        <div className={s.skillsBlock}>
            <div className={s.container}>
                <h2>My Skills</h2>
                <div className={s.skillsBlock__content}>
                    {
                        props.skills.map(skill => {
                            return <Skill key={skill.id} title={skill.title} description={skill.description}  />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

