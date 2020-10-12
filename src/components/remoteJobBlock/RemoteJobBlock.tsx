import React from 'react';
import s from './remoteJobBlock.module.css';

export function RemoteJobBlock() {
    return (
        <div className={s.remoteJobBlock}>
            <div className={s.container}>
                <h2>Interested in remote hiring or other collaborating?</h2>
                <span>I’m always open to discussing about it</span>
                <div className={s.remoteJobBlock__btn}>
                    <button>Start a conversation</button>
                </div>
            </div>
        </div>
    );
}

