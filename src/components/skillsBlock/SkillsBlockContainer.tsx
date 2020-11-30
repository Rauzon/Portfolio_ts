import React from 'react';
import {SkillsBlock} from './SkillsBlock';


export type SkillsDataType = {
    id: number | string
    title: string
    description: string
    icon?: string
}


export function SkillsBlockContainer() {


    const skillsData: SkillsDataType[] = [{
        id: 1,
        title: "JavaScript",
        description: 'Having good knowledge in Javascript i can create dynamic-changed application with help React library and also features using native functional',
        icon: 'https://i.ibb.co/LQg2yB7/output-onlinepngtools-1.png',
    }, {
        id: 2,
        title: "TypeScript",
        description: 'We can\'t imagine creating of a big application without TypeScript now so, using TS I can make static type for each block of program forming an app where you\'ll be able to understand that\'s happening',
        icon: 'https://i.ibb.co/0yL6kpw/output-onlinepngtools-2.png'
    }, {
        id: 3,
        title: "ReactJS",
        description: 'Using the most popular library, ReactJS, I can create a single page application with a good architecture and using the actual libraries which are popular right now',
        icon: 'https://i.ibb.co/Hh474tD/output-onlinepngtools-4.png',
    }, {
        id: 4,
        title: "HTML",
        description: 'Having good knowledge in the HTML5 I can create the semantic layout for correct validation in a browser',
        icon: 'https://i.ibb.co/rMXszzP/output-onlinepngtools-5.png'
    }, {
        id: 5,
        title: "CSS",
        description: 'Having good knowledge in CSS and also knowing preprocessor like SCSS and library UI libraries for ReactJS like Material-UI I can create style which will be please to see on the desktop and mobile version of app',
        icon: "https://i.ibb.co/PQZR30x/output-onlinepngtools-6.png"
    },
    ]


    return <SkillsBlock skills={skillsData}/>
}