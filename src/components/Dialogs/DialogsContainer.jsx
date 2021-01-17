import React from 'react';
import Dialogs from './Dialogs'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialog-reducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;

                    let onMessageClick = () => {
                        store.dispatch(sendMessageCreator());
                    }

                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body));
                    }

                    return <Dialogs
                        updateNewMessageBody={onNewMessageChange}
                        sendMessage={onMessageClick}
                        dialogsPage={state}
                    />
                }
            }
        </StoreContext.Consumer> 
    )
}

export default DialogsContainer;