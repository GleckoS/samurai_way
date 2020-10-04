import React from "react";
import {Field, reduxForm} from "redux-form";

const LoggingForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="email" component="input" placeholder="email"/>
            </div>
            <div>
                <Field name="password" component="input" placeholder="password"/>
            </div>
            <div>
                <span>Remember Me</span><Field name="rememberMe" component="input" type="checkbox"/>
            </div>
            <div>
                <button> Login</button>
            </div>
        </form>

    )
}


const ReduxLoggingForm = reduxForm({form: "contact"})(LoggingForm)


const Logging = () => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoggingForm onSubmit={onSubmit}/>
        </div>
    )

}
export default Logging