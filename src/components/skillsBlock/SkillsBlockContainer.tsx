import React from 'react';
import {SkillsBlock} from './SkillsBlock';


export type SkillsDataType = {
    id: number | string
    title: string
    description: string
    icon?: string
}


export function SkillsBlockContainer() {


    const skillsData: SkillsDataType[] = [
        {
            id: 1,
            title: "JS",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            icon: 'https://i.ibb.co/LQg2yB7/output-onlinepngtools-1.png',
        },
        {
            id: 2,
            title: "TypeScript",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            icon: 'https://i.ibb.co/0yL6kpw/output-onlinepngtools-2.png'
        },
        {
            id: 3,
            title: "ReactJS",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            icon: 'https://i.ibb.co/Hh474tD/output-onlinepngtools-4.png',
        },
        {
            id: 4,
            title: "HTML",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            icon: 'https://i.ibb.co/rMXszzP/output-onlinepngtools-5.png'
        },
        {
            id: 5,
            title: "CSS",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            icon: "https://i.ibb.co/PQZR30x/output-onlinepngtools-6.png"
        },
    ]


    return <SkillsBlock skills={skillsData}/>
}