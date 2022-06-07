import React from 'react';
import {reduxForm} from "redux-form";
import {Field} from 'redux-form'

const Login = () => {
    const submit = (values) => {
        console.log(values)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit}/>
        </div>
    );
};

export default Login;

export const LoginForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {/*<label htmlFor="username">Username</label>*/}
                <Field placeholder='username' name='username' component='input'/>
            </div>
            <div>
                {/*<label htmlFor="password">Password</label>*/}
                <Field placeholder='password' name='password' component='input'/>
            </div>
            <div>
                <Field name='rememberMe' component='input' type='checkbox'/> remember me
            </div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)