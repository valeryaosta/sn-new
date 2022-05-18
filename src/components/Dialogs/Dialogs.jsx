import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Valery
                </div>
                <div className={s.dialog}>
                    Dmitry
                </div>
                <div className={s.dialog}>
                    Kseniya
                </div>
                <div className={s.dialog}>
                    Vitaliy
                </div>
                <div className={s.dialog}>
                    Vladislav
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello wooooah here!</div>
                <div className={s.message}>I don’t care what you think about me. I don’t think about you at all.</div>
                <div className={s.message}>Life is a series of choices.</div>
            </div>
        </div>
    );
};

export default Dialogs;