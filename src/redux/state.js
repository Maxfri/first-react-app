const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            ]
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }

            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }
}


export const addPostActionCreater = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreater = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}


export default store;
window.store = store;