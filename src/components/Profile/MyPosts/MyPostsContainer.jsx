import React from 'react';
import s from './MyPosts.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = ({store}) => {
    let state = store.getState()

    let onAddPost = () => {
        store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        store.dispatch(action)
    }

    return (
        <div className={s.postsBlock}>
          <MyPosts updateNewPostText={onPostChange}
                   addPost={onAddPost}
                   posts={state.profilePage.posts}
                   newPostText={state.profilePage.newPostText}
          />
        </div>
    );
};

export default MyPostsContainer;