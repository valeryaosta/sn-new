import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hello world!', likesCount: 23},
        {id: 2, message: 'React, Redux.. you will know them cool!', likesCount: 15},
        {id: 3, message: 'Each failure is the next success!', likesCount: 100},
        {id: 4, message: 'Wake me up when September ends..', likesCount: 7}
    ]
}


it('length of posts should be incremented', () => {
    // 1.test data
    let action = addPost('hello')

    // 2.action
    let newState = profileReducer(state, action)

    // 3.expectation
    expect(newState.posts.length).toBe(5)

})

it('message of new post should be correct', () => {
    // 1.test data
    let action = addPost('hello')

    // 2.action
    let newState = profileReducer(state, action)

    // 3.expectation
    expect(newState.posts[4].message).toBe('hello')
})

it('after deleting length of messages should be decrement', () => {
    // 1.test data
    let action = deletePost(1)

    // 2.action
    let newState = profileReducer(state, action)

    // 3.expectation
    expect(newState.posts.length).toBe(3)
})

it('after deleting length of messages shouldn`t be decrement if id is incorrect', () => {
    // 1.test data
    let action = deletePost(1000)

    // 2.action
    let newState = profileReducer(state, action)

    // 3.expectation
    expect(newState.posts.length).toBe(4)
})