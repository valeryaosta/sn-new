let initialState = {
    friends: [
        {id: 1, name: 'Rihanna', ava: 'https://cdn.fishki.net/upload/post/201602/25/1861638/10_1.jpg'},
        {
            id: 2,
            name: 'Johny',
            ava: 'https://4tololo.ru/sites/default/files/images/20151604153454.jpg?itok=vs2D2dB2'
        },
        {id: 3, name: 'Megan', ava: 'https://4tololo.ru/sites/default/files/images/20151308202247.jpg'},
    ]
}

const sidebarReducer = (state = initialState) => {

    return {...state}
}

export default sidebarReducer