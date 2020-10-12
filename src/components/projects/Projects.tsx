import React from 'react';
import s from './projects.module.css';
import { ProjectsDataType } from './ProjectsContainer';
import {Project} from "./Project";

type PropsType = {
    projects: ProjectsDataType[]
}

export function Projects(props: PropsType) {
    return (
        <div className={s.projects}>
            <div className={s.container}>
                <h2 className={s.projects__title}>My Project</h2>
                <div className={s.projects__content}>
                    {
                        props.projects.map(p => {
                            return <Project key={p.id}  title={p.projectName} description={p.description}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

