import React from 'react';
import {reduxForm} from "redux-form";
import {Field} from 'redux-form'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators";
import s from './Login.module.css'
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

export const LoginForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <div>
                {/*<label htmlFor="username">Username</label>*/}
                <Field placeholder='email' name='email' component={Input} validate={[required]}/>
            </div>
            <div>
                {/*<label htmlFor="password">Password</label>*/}
                <Field placeholder='password' type='password' name='password' component={Input} validate={[required]}/>
            </div>
            <div className={s.rememberMe}>
                <Field name='rememberMe' component={Input} type='checkbox' className={s.checkbox}/>
                <span> remember me</span>
            </div>


            <button className={s.btn}>Login</button>

        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)