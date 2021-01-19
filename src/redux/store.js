import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello world', likesCount: 12 },
                { id: 2, message: 'Hi, how are you??', likesCount: 100500 }
            ],
            newPostText: 'Hello jedi!'
        },
        dialogsPage: {
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
        },
        sidebar: {

        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}

export default store;
