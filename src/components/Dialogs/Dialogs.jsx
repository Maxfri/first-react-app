import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Яков' },
        { id: 2, name: 'Андрей' },
        { id: 3, name: 'Куколдей' },
        { id: 4, name: 'Куколдяков' },
        { id: 5, name: 'Куколдяр' }
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Deep dark fantacy' },
        { id: 4, message: 'Put your finger in my ass' },
        { id: 5, message: 'Куколдяр' }
    ]


    let dialogsElements = dialogs.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    });

    let messagesElements = messages.map((message) => {
        return <Message message={message.message} />
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;