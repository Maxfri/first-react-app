const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Deep dark fantacy' },
        { id: 4, message: 'Put your finger in my ass' },
        { id: 5, message: 'Куколдяр' }
    ],
    dialogs: [
        { id: 1, name: 'Яков' },
        { id: 2, name: 'Андрей' },
        { id: 3, name: 'Куколдей' },
        { id: 4, name: 'Куколдяков' },
        { id: 5, name: 'Куколдяр' }
    ],
    newMessageBody: ""
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return  {
                ...state,
                newMessageBody: action.body
            };
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            };
        }
        default:
            return state;
    }

}


export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogReducer;