import React from 'react';
import {Projects} from './Projects';

export type ProjectsDataType = {
    id: string | number
    icon: string
    projectName: string
    projectLink: string
}

export function ProjectsContainer() {


    const projectsData: ProjectsDataType[] = [
        {id: 1, icon: '', projectName: "Social Network", projectLink: "/#"},
        {id: 2, icon: '',  projectName: "TodoList", projectLink: "/#"},
    ]


    return <Projects projects={projectsData}/>;
}

