const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'Hello world!', likesCount: 23},
        {id: 2, message: 'React, Redux.. you will know them cool!', likesCount: 15},
        {id: 3, message: 'Each failure is the next success!', likesCount: 100},
        {id: 4, message: 'Wake me up when September ends..', likesCount: 7}
    ],
    newPostText: 'Type here something..'
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT : {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export default profileReducer


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

