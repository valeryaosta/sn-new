import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo(({posts, addPost}) => {
    const postsElements =
        [...posts].reverse()
            .map((post) => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    const submit = (values) => {
        addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <AddPostReduxForm onSubmit={submit}/>
            <div className={s.postsWrapper}>
                {postsElements}
            </div>
        </div>
    );
});

export default MyPosts;


export const AddPostForm = (props) => {
    const {handleSubmit} = props
    const maxLengthCreator50 = maxLengthCreator(50)

    return (
        <form onSubmit={handleSubmit} className={s.wrapper}>
            <Field name='newPostText'
                   component={Textarea}
                   placeholder="Remember, be nice!"
                   cols="100"
                   rows="4"
                   validate={[required, maxLengthCreator50]}
            />
            <button className={`${s.btn} ${s.btn1}`}>Add post</button>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPostForm)