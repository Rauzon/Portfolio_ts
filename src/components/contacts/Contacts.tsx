import React from 'react';
import s from './contacts.module.css';

export function Contacts() {
    return (
        <div className={s.contacts} id={'contacts'}>
            <div className={s.container}>
                <h2>Contacts</h2>
                <form className={s.contacts__form} autoComplete='off'>
                    <input id={s.name} type="text" autoComplete='false' style={{display: "none"}}
                           placeholder={'Name...'}/>
                    <input id={s.name} type="text" autoComplete='false' placeholder={'Name...'}/>
                    <input id={s.mail} type="email" autoComplete='false' placeholder={'Email...'}/>
                    <textarea id={s.description} placeholder={'Enter description...'}></textarea>
                    <div className={s.contacts__btn}>
                        <button type={'submit'}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

