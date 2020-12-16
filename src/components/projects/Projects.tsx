import React from 'react';
import s from './projects.module.css';
import {ProjectsDataType} from './ProjectsContainer';
import {Project} from "./Project";

type PropsType = {
    projects: ProjectsDataType[]
}

export function Projects(props: PropsType) {
    return (
        <div className={s.projects} id={'projects'}>
            <div className={s.container}>
                <div className={s.projects__title}>
                    <h3>
                        My Projects
                    </h3>
                    <div className={s.container__title_subBlock}>
                        <div className={s.container__title_subBlock_wraper}>
                            <div className={s.container__title_subBlock_wraper_divider}>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.projects__content}>
                    {
                        props.projects.map(p => {
                            return <Project key={p.id} projectName={p.projectName} id={p.id} projectLink={p.projectLink} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

