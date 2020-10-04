import React, {Component} from "react";

import {Field, Form} from 'react-final-form'
import {connect} from "react-redux";
import {loggingFormThunkCreator} from "../../redux/LoggingReducer";


class MyFormContainer extends Component {


    sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    onSubmit = async values => {
        await this.sleep(300)
        window.alert(JSON.stringify(values, 0, 2))
        this.props.loggingFormThunkCreator(values)
    }
    render() {
        return<MyForm
            email={this.props.email}
            password={this.props.password}
            select={this.props.select}
            onSubmit={this.onSubmit}
         />
    }
}

const MyForm = (props) => {
   return( <Form
        onSubmit={props.onSubmit}
        initialValues={{
            email: props.email,
            password: props.password,
            select: props.select
        }}
        validate={values => {

        }}
        render={({handleSubmit}) => (

            <form id="myForm" onSubmit={handleSubmit}>
                <h2>Login Form</h2>

                <div>
                    <label>email</label>
                    <Field name="email" component="input" placeholder=""/>
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
                        .dispatchEvent(new Event('submit', {cancelable: true})) // ✅
                }} type="submit">Submit
                </button>
            </form>
        )}
    />)

}

let mapStateToProps = (state) => {
    return {
        email: state.Login.email,
        password: state.Login.password,
        select: state.Login.select
    }
}

export default connect(mapStateToProps, {
    loggingFormThunkCreator
})(MyFormContainer)

