import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Яков'},
        {id: 2, name: 'Андрей'},
        {id: 3, name: 'Куколдей'},
        {id: 4, name: 'Куколдяков'},
        {id: 5, name: 'Куколдяр'}
    ]

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Deep dark fantacy'},
        {id: 4, message: 'Put your finger in my ass'},
        {id: 5, message: 'Куколдяр'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
            </div>
        </div>
    )
}

export default Dialogs;