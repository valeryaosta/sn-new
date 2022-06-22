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

const Login = ({login, isAuth, captchaUrl}) => {
    const submit = (values) => {
        login(values.email, values.password, values.rememberMe, values.captcha)
    }

    if (isAuth) {
        return <Navigate to='/profile'/>
    }

    return (
        <>
            <div className={s.formWrapper}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={submit} captchaUrl={captchaUrl}/>
            </div>

            <div className={s.freeAccWrapper}>
                <h2>Hello... Thank You for visiting my Application!</h2>
                <h3>If you don't have personal account here, use test data:</h3>
                <p><b>Email: </b> free@samuraijs.com</p>
                <p><b>Password: </b> free</p>
            </div>
        </>


    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login})(Login);

export const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.inputForm}>{createField('email', 'email', Input, [required])}</div>
            <div
                className={s.inputForm}>{createField('password', 'password', Input, [required], {type: 'password'})}
            </div>

            <div className={s.rememberMe}>
                <Field name='rememberMe' component={Input} type='checkbox' className={s.checkbox}/>
                <span> remember me</span>
            </div>

            {captchaUrl && <div className={s.captcha}><img src={captchaUrl} alt='captcha'/></div>}
            {captchaUrl &&
                <div className={s.inputForm}>
                    {createField('anti-bot symbols from captcha','captcha', Input, [required])}
                </div>
            }

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

