import React from 'react';
import {Projects} from './Projects';

export type ProjectsDataType = {
    id: string
    icon: string
    projectName: string
    projectLink: string
}

export function ProjectsContainer() {


    const projectsData: ProjectsDataType[] = [
        {id: 'one', icon: '', projectName: "Social Network", projectLink: "https://rauzon.github.io/Social_network_react_typescript"},
        {id: 'two', icon: '',  projectName: "TodoList", projectLink: "/#"},
    ]


    return <Projects projects={projectsData}/>;
}

