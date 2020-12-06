import React, {useState} from 'react';
import style from './nav.module.css';

type LinkType = {
    id: number
    name: string
    to: string
    target?:string
}
type LinksArrType = LinkType[]


export function Nav() {

    const [activeId, setActiveId] = useState<number | null>(null)

    const linksArr: LinksArrType = [{id: 1, name: 'Homepage', to: 'https://github.com/', target:'_blank'},
        {id: 2, name: 'Projects', to: '#projects'},
        {id: 3, name: 'Skills', to: '#skills'},
        {id: 4, name: 'Contacts', to: '#contacts'},
    ]

    return (
        <>
            <input id={style.menu__toggle} type={"checkbox"}/>
            <label className={style.menu__btn} htmlFor={style.menu__toggle}>
                <span></span>
            </label>
            <div className={style.nav}>
                {
                    linksArr.map((item) => {

                        const addActiveClass = () => {
                            setActiveId(item.id)
                        }

                        return <a target={item.target} key={item.id} href={item.to}
                                  className={(item.id === activeId) ? `${style.nav__link} ${style.active}` : `${style.nav__link}`}
                                  onClick={addActiveClass}>
                            {item.name}
                        </a>
                    })
                }
            </div>
            <div className={style.nav__burgerBtn_block}></div>
        </>
    );
}

