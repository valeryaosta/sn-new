import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = ({posts, addPost, newPostText, updateNewPostText}) => {

    const textareaRef = useRef(null)

    const postsElements = posts.map((post) => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    const onAddPost = () => {
        let text = textareaRef.current.value
        addPost(text)
    }

    const onRemovePost = () => {
        alert('remove')
    }

    const onChangeHandle = () => {
        let text = textareaRef.current.value
        updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            MyPosts
            <div className={s.wrapper}>
            <textarea ref={textareaRef}
                    // placeholder="Remember, be nice!"
                      value={newPostText}
                      onChange={onChangeHandle}
                      cols="30"
                      rows="5"
            />
                <button onClick={onAddPost} className={`${s.btn} ${s.btn1}`}>Add post</button>
                <button onClick={onRemovePost} className={`${s.btn} ${s.btn2}`}>Remove</button>
            </div>
            <div className={s.postsWrapper}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;