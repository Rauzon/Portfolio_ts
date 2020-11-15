import React, {MouseEvent, useState} from 'react';
import s from './nav.module.css';

type LinkType = {
    id: number
    name: string
    to: string
}
type LinksArrType = LinkType[]


export function Nav() {

    const [activeId, setActiveId] = useState<number | null>(null)

    const linksArr: LinksArrType = [{id: 1, name: 'Homepage', to: '/#'},
        {id: 2, name: 'Projects', to: '/#'},
        {id: 3, name: 'Skills', to: '/#'},
        {id: 4, name: 'Contacts', to: '/#'},
    ]

    return (
        <>
            <input id={s.menu__toggle} type={"checkbox"}/>
            <label className={s.menu__btn} htmlFor={s.menu__toggle}>
                <span></span>
            </label>
            <div className={s.nav}>
                {
                    linksArr.map((item) => {

                        const addActiveClass = () => {
                            setActiveId(item.id)
                        }

                        return <a key={item.id} href={item.to}
                                  className={(item.id === activeId) ? `${s.nav__link} ${s.active}` : `${s.nav__link}`}
                                  onClick={addActiveClass}>
                            {item.name}
                        </a>
                    })
                }
            </div>
            <div className={s.nav__burgerBtn_block}></div>
        </>
    );
}

