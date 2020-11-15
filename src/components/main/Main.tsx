import React, {MouseEvent, CSSProperties, useState, useRef} from 'react';
import s from './main.module.css';

export function Main() {

    let [positionX, setPositionX] = useState<number | null>(null)
    let [positionY, setPositionY] = useState<number | null>(null)

    const mouseMove = (e: MouseEvent<HTMLDivElement>) => {

        let followX = (window.innerWidth / 2 - e.clientX);
        let followY = (window.innerHeight / 2 - e.clientY);

        let x = 0,
            y = 0;
        x += ((-followX - x) * 0.05);
        y += (followY - y) * 0.05;

        setPositionX(x)
        setPositionY(y)
    }

    const mouseLeave = (e: MouseEvent<HTMLDivElement>) => {

        setPositionX(0)
        setPositionY(0)
    }

    let offset = {
        transform: `translate(-2.5%, -2.5%)
        rotateY(${positionX}deg)
                  rotateX(${positionY}deg)`
    }

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
                <div onMouseMove={mouseMove}
                     onMouseLeave={mouseLeave}
                     className={s.main__photo}>
                    <div className={s.main__photo_wrapper} style={offset}>
                        <img src="https://i.ibb.co/2kDwxct/imgonline-com-ua-Black-White-So9-Jywlp-Igk-E3lr.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

