import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'> Яша </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'> Андрей </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'> Куколдей </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'> Куколдяков </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>  Куколдяр </NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Deep dark fantacy</div>
            </div>
        </div>
    )
}

export default Dialogs;