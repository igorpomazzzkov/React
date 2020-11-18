const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, name: "Emily", like: 10, text: "Yop"},
                {id: 2, name: "Sophy", like: 45, text: "Yop"},
                {id: 3, name: "catalina", like: 87, text: "Yop"},
                {id: 4, name: "kate", like: 32, text: "Yop"},
                {id: 5, name: "georgia", like: 43, text: "Yop"},
            ],
            newPostText: 'Введите текст'
        },
        messagesPage: {
            messages: [
                {id: 1, text: "Hi"},
                {id: 2, text: "Hi"},
                {id: 3, text: "Hi"},
                {id: 4, text: "Hi"},
                {id: 5, text: "Hi"},
            ],
            dialogs: [
                {id: 1, name: "Emily"},
                {id: 2, name: "Sophy"},
                {id: 3, name: "catalina"},
                {id: 4, name: "kate"},
                {id: 5, name: "georgia"}
            ],
            newMessageBody: ''
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    _addPost() {
        let newPost = {
            id: 5,
            text: this._state.profilePage.newPostText,
            like: 0,
            name: 'Egor'
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    _updateNewPost(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber()
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPost(action.newText)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.messagesPage.newMessageBody = action.text
            this._callSubscriber()
        } else if (action.type === SEND_NEW_MESSAGE){
            let messageText = this._state.messagesPage.newMessageBody;
            let lastMessageObject = this._state.messagesPage.messages.slice(-1)[0];
            this._state.messagesPage.newMessageBody = ''
            let messageObj = {
                id: lastMessageObject.id,
                text: messageText
            }
            this._state.messagesPage.messages.push(messageObj)
            this._callSubscriber()
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const sendMessageCreator = () => {
    return {type: SEND_NEW_MESSAGE}
}

export const updateNewMessageBody = (text) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, text: text}
}
window.store = store;
export default store;