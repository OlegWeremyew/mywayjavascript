import React from 'react';
import c from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                <div className={c.dialog + " " +c.active}>
                    Oleg
                </div>
                <div className={c.dialog}>
                    Homa
                </div>
                <div className={c.dialog}>
                    Diana
                </div>
                <div className={c.dialog}>
                    Fat cat
                </div>
                <div className={c.dialog}>
                    Alena
                </div>
                <div className={c.dialog}>
                    Igor
                </div>
            </div>
            <div className={c.messages}>
                <div className="{c.message}">Hi</div>
                <div className="{c.message}">Ohohoh</div>
                <div className="{c.message}">beer</div>
            </div>
        </div>
    );
}

export default Dialogs;