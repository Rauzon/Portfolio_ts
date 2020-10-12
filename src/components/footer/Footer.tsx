import React from 'react';
import s from './footer.module.css';

type dataType = {
    id: number
    icon: string
}

const img = 'https://icons-for-free.com/iconfiles/png/512/linkedin+logo+logo+website+icon-1320190502911715717.png'

export function Footer() {


    const data: dataType[] = [
        {id: 1, icon: img},
        {id: 2, icon: img},
        {id: 3, icon: img},
        {id: 4, icon: img},
    ]

    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <h2>Vlad Aharodnikov</h2>
                <div className={s.footer__content}>
                    {
                        data.map(item => {
                            return <div key={item.id} className={s.footer__content_item}>
                                <img src={item.icon} alt=""/>
                            </div>
                        })
                    }
                </div>
                <span>© Copyright Vlad Aharodnikov</span>
            </div>
        </footer>
    );
}

