import React from 'react';
import s from './remoteJobBlock.module.css';

export function RemoteJobBlock() {
    return (
        <div className={s.remoteJobBlock}>
            <div className={s.container}>
                <h2>Interested in remote hiring or other collaborating?</h2>
                <span>I’m always open to discussing about it</span>
                <div className={s.remoteJobBlock__btn}>
                    <a target={'_blank'} href={'https://www.linkedin.com/in/vlad-aga/'}>Start a conversation</a>
                </div>
            </div>
        </div>
    );
}

