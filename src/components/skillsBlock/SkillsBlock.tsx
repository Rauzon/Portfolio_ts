import React from 'react';
import s from './skillsBlock.module.css';
import {Skill} from './Skill';
import {SkillsDataType} from './SkillsBlockContainer';

type PropsType = {
    skills: SkillsDataType[]
}

export function SkillsBlock(props: PropsType) {
    return (
        <div className={s.skillsBlock} id={'skills'}>
            <div className={s.container}>
                <h2>My Skills</h2>
                <div className={s.container__title_subBlock}>
                    <div className={s.container__title_subBlock_wraper}>
                        <div className={s.container__title_subBlock_wraper_divider}>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className={s.skillsBlock__content}>
                    {
                        props.skills.map(skill => {
                            return <Skill key={skill.id}
                                          title={skill.title}
                                          description={skill.description}
                                          icon={skill.icon}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

