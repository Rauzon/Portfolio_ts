import React from 'react';
import s from './main.module.css';
import {animated, useSpring} from 'react-spring'

const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 25, (x - window.innerWidth / 2) / 25, 1.1]
const trans = (x: any, y: any, s: any):string => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


export function Main() {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.main__text}>
                    <h1>
                        <div><span>I'm</span></div>
                        <div><span>Aharodnikov</span></div>
                        <div><span>Vlad</span></div>
                    </h1>
                    <div className={s.main__text_prof}><span>Frontend Developer</span></div>
                </div>
                <animated.div
                    className={s.card}
                    onMouseMove={({clientX: x, clientY: y}) => {
                        if(window.innerWidth >= 1020){
                            return set({xys: calc(x-225, y)})
                        }
                        return set({xys: calc(x, y)})
                    }}
                    onMouseLeave={() => set({xys: [0, 0, 1]})}
                    style={{
                        // @ts-ignore
                        transform: props.xys.interpolate(trans)
                    }}
                />
            </div>
        </div>
    );
}


