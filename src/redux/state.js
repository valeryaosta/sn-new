import {rerenderEntireTree} from "../render";

export const state = {
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hello wooooah here!'},
            {id: 2, message: 'I don’t care what you think about me. I don’t think about you at all.'},
            {id: 3, message: 'Life is a series of choices.'},
            {id: 4, message: 'Today is the best day.'},
            {id: 5, message: 'Love is in the air.'},
            {id: 6, message: 'Bla bla bla'}
        ],
        dialogs: [
            {
                id: 1,
                name: 'Valery',
                ava: 'https://politeka.net/crops/2efaab/360x0/1/0/2020/01/06/RV4cHZxr9tOIjK3mpNGi8ZQgOrytzD0VzPom2oob.png'
            },
            {
                id: 2,
                name: 'Dmitry',
                ava: 'data:image/jpeg;base64,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'
            },
            {id: 3, name: 'Kseniya', ava: 'https://m.allkharkov.ua/img_65506.jpg'},
            {
                id: 4,
                name: 'Vitaliy',
                ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJa78uov7x5d6-O3ycDaGwXgjrAUB7kJag__BKioIX3vH46N1OBDXR-V-QuibQCVrVt0&usqp=CAU'
            },
            {id: 5, name: 'Vladislav', ava: 'https://i.pinimg.com/236x/e1/9c/59/e19c59964329e7d9d95deec085380540.jpg'},
            {id: 6, name: 'Eugene', ava: 'https://i.pinimg.com/236x/a3/f6/37/a3f637a0d8e2e3cd9e8a5c2ca3202fa8.jpg'}
        ],
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hello world!', likesCount: 23},
            {id: 2, message: 'React, Redux.. you will know them cool!', likesCount: 15},
            {id: 3, message: 'Each failure is the next success!', likesCount: 100},
            {id: 4, message: 'Wake me up when September ends..', likesCount: 7}
        ],
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Rihanna', ava: 'https://cdn.fishki.net/upload/post/201602/25/1861638/10_1.jpg'},
            {
                id: 2,
                name: 'Johny',
                ava: 'https://4tololo.ru/sites/default/files/images/20151604153454.jpg?itok=vs2D2dB2'
            },
            {id: 3, name: 'Meaghan', ava: 'https://4tololo.ru/sites/default/files/images/20151308202247.jpg'},
        ]
    }
}

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}