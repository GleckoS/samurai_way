import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../commonComponents/Input";
import {required} from "../../utils/validators/validators";
import L from "./Logging.module.css"

const LoggingForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="email" component={Input} validate={[required]} placeholder="email"/>
            </div>
            <div>
                <Field name="password" component={Input} validate={[required]} placeholder="password"/>
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
        <div className={L.wrapper}>
            <h1>LOGIN</h1>
            <ReduxLoggingForm onSubmit={onSubmit}/>
        </div>
    )

}
export default Logging