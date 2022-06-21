import s from './FormsControls.module.css'
import {Field} from "redux-form";
import React from "react";

export const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, children, ...restProps} = props

    return (
        <FormControl {...props} >
            <textarea className={s.textarea} {...input} {...restProps} />
        </FormControl>
    )
}

export const Textarea2 = (props) => {
    const {input, meta, children, ...restProps} = props

    return (
        <FormControl {...props} >
            <textarea className={s.textarea2} {...input} {...restProps} />
        </FormControl>
    )
}


export const Input = (props) => {
    const {input, meta, children, ...restProps} = props

    return (
        <FormControl {...props} >
            <input className={s.input} {...input} {...restProps} />
        </FormControl>
    )
}

export const createField = (placeholder, name, component, validators, props, text = '') => {
    return (
        <div>
            <Field placeholder={placeholder} name={name} component={component}
                   validate={validators} {...props}/><span>{text}</span>
        </div>
    )
}