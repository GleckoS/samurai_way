import React from "react";
import I from "./common.module.css"

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return(
        <div className={I.FormWrapper}>
            <input className={I.formControl + " " + (hasError ? I.error : "")} {...props} {...input}/>
            {hasError ? <span className={I.errorText}>{meta.error}</span> : null}
        </div>

    )
}