import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = ({store}) => {
//     let state = store.getState()
//
//     let onAddPost = () => {
//         store.dispatch(addPostActionCreator())
//     }
//
//     let onPostChange = (text) => {
//         let action = updateNewPostTextActionCreator(text)
//         store.dispatch(action)
//     }
//
//     return (
//         <div className={s.postsBlock}>
//           <MyPosts updateNewPostText={onPostChange}
//                    addPost={onAddPost}
//                    posts={state.profilePage.posts}
//                    newPostText={state.profilePage.newPostText}
//           />
//         </div>
//     );
// };

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer