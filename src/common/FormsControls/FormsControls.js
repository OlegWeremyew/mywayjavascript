import React from 'react';
import styles from "./FormsControls.module.css"

const FormControl = ({input, meta, child, element, ...props}) => {

    const hasError = meta.touched && meta.error
    const errorStyle = hasError ? styles.error : ""

    return (
        <div className={styles.formControl + " " + errorStyle}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
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


