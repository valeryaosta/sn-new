const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE : {
            let newMessage = {
                id: 6,
                message: state.newMessageText
            }

            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        }
        case UPDATE_MESSAGE_TEXT : {
            state.newMessageText = action.newMessageText
            return state
        }

        default:
            return state
    }
}

export default dialogsReducer

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (newText) => ({
    type: UPDATE_MESSAGE_TEXT,
    newMessageText: newText
})