import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = ({posts, newPostText, addPost, updateNewPostText}) => {

    const textareaRef = useRef(null)

    const postsElements = posts.map((post) => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    const onAddPost = () => {
        addPost()
    }

    const onPostChange = () => {
        let text = textareaRef.current.value
        updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            MyPosts
            <div className={s.wrapper}>
            <textarea ref={textareaRef}
                      placeholder="Remember, be nice!"
                      value={newPostText}
                      onChange={onPostChange}
                      cols="30"
                      rows="5"
            />
                <button onClick={onAddPost} className={`${s.btn} ${s.btn1}`}>Add post</button>
            </div>
            <div className={s.postsWrapper}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;