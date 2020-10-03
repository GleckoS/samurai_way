import React from "react";

import {Field, Form} from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}

const MyForm = () => (
    <Form
        onSubmit={onSubmit}
        initialValues={{
            login: "",
            password: "",
            select: false
        }}
        validate={values => {

        }}
        render={({handleSubmit, form, submitting, pristine, values}) => (
            <form id="myForm" onSubmit={handleSubmit}>
                <h2>Вернуться сюда после освоение DOM</h2>

                <div>
                    <label>Login</label>
                    <Field name="login" component="input" placeholder=""/>
                </div>

                <div>
                    <label>Password</label>
                    <Field name="password" component="input" placeholder=""/>
                </div>

                <div>
                    <label>Remember me</label>
                    <Field name="select" component="input" type="checkbox"/>
                </div>

                <button onClick={() => {
                    document.getElementById('myForm')
                        .dispatchEvent(new Event('submit', { cancelable: true })) // ✅
                }} type="submit">Submit</button>
            </form>
        )}
    />

)

/* Вернуться сюда после освоение DOM*/
export default MyForm