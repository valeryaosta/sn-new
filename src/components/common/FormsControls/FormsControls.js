import s from './FormsControls.module.css'

export const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            {props.children}
            {hasError && <span>{meta.error}</span>}
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

export const Input = (props) => {
    const {input, meta, children, ...restProps} = props

    return (
        <FormControl {...props} >
            <input className={s.input} {...input} {...restProps} />
        </FormControl>
    )
}