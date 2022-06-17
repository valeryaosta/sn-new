import React from 'react';
import {reduxForm} from "redux-form";
import {Field} from 'redux-form'
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators";
import s from './Login.module.css'
import st from '../common/FormsControls/FormsControls.module.css'
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const Login = ({login, isAuth}) => {
    const submit = (values) => {
        login(values.email, values.password, values.rememberMe)
    }

    if (isAuth) {
        return <Navigate to='/profile'/>
    }

    return (
        <div className={s.formWrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);

export const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            {createField('email', 'email', Input, [required])}
            {createField('password', 'password', Input, [required], {type: 'password'})}
            {/*{createField(null, 'rememberMe', Input, [], {type: 'checkbox'}, "remember me", {cn: 'remember'})}*/}

            <div className={s.rememberMe}>
                <Field name='rememberMe' component={Input} type='checkbox' className={s.checkbox}/>
                <span> remember me</span>
            </div>

            {error &&
            <div className={st.formSummaryError}>
                {error}
            </div>
            }

            <button className={s.btn}>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

