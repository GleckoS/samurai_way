import React from "react";

import {Field, Form} from 'react-final-form'


const MyForm = () => (
    <Form
        initialValues={{
            /*firstName: ''*/
        }}
        onSubmit={values => {
            // send values to the cloud

        }}
        validate={values => {
            // do validation here, and return errors object

        }}
        handleSubmit = {() => {}}
        render={({handleSubmit, pristine, form, submitting}) => (
            <form onSubmit={handleSubmit}>
                <h2>Simple Default Input</h2>

                <div>
                    <label>Login</label>
                    <Field name="firstName" component="input" placeholder="First Name"/>
                </div>

                <div>
                    <label>Password</label>
                    <Field name="password" component="input" placeholder="Password"/>
                </div>

                <div>
                    <label>Remember me</label>
                    <Field name="select" component="input" type="checkbox"/>
                </div>

                <button type="submit">Submit</button>
            </form>
        )}
    />

)

export default MyForm