let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
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
};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;