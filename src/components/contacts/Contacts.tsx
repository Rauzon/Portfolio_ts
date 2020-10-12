import React from 'react';
import s from './contacts.module.css';

export function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={s.container}>
                <h2>Contacts</h2>
                <form className={s.contacts__form}>
                    <input id={s.name} type="text" placeholder={'Name...'}/>
                    <input id={s.mail} type="text" placeholder={'email...'}/>
                    <textarea id={s.description} placeholder={'Enter description...'}></textarea>
                </form>
                <div className={s.contacts__btn}>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
}

