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
        {id: 1, title: "JS", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {id: 2, title: "TypeScript", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {id: 3, title: "ReactJS", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {id: 4, title: "HTML", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {id: 5, title: "CSS", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    ]


    return <SkillsBlock skills={skillsData}/>
}