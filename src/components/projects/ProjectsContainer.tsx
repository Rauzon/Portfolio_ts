import React from 'react';
import {Projects} from './Projects';

export type ProjectsDataType = {
    id: string | number
    icon: string
    projectName: string
    description: string
}

export function ProjectsContainer() {


    const projectsData: ProjectsDataType[] = [
        {id: 1, icon: '', description: 'sunt in culpa qui officia deserunt mollit anim id est laborum', projectName: "Social Network"},
        {id: 2, icon: '', description: 'sunt in culpa qui officia deserunt mollit anim id est laborum sunt in culpa qui officia deserunt mollit anim id est laborum sunt in culpa qui officia deserunt mollit anim id est laborum sunt in culpa qui officia deserunt mollit anim id est laborum', projectName: "TodoList"},
        {id: 2, icon: '', description: 'sunt in culpa qui officia deserunt mollit anim id est laborum sunt in culpa qui officia deserunt mollit anim id est laborum sunt in culpa qui officia deserunt mollit anim id est laborum sunt in culpa qui officia deserunt mollit anim id est laborum', projectName: "TodoList"},
    ]


    return <Projects projects={projectsData}/>;
}

