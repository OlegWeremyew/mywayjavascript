import React from 'react';
import styles from "./FormsControls.module.css"
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children, element, ...props}) => {

    const hasError = touched && error
    const errorStyle = hasError ? styles.error : ""

    return (
        <div className={styles.formControl + " " + errorStyle}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, element, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, element, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const CreateField = (placeholder, name, validators, component, props = {}, text) => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props}
        /> {text}
    </div>
)


