import React from "react"
import M from './Messages.module.css'
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";
import {TextArea} from "../../../commonComponents/TextArea";

const Messages = (props) => {

    let Messages = props.MessagesData.map(message =>
        <Message sender={message.sender} img={message.img} text={message.text}/>
    )

    let AddMessage = (values) => {
        props.AddMessage(values.newMessageElement)
    }

    return (
        <section className={M.main}>
            <div className={M.wrapper}>

                <div className={M.messages}>
                    <ul>
                        {Messages}
                    </ul>
                </div>
                <div className={M.input}>
                    <AddMessageFormRedux onSubmit={AddMessage}/>
                </div>
            </div>
        </section>
    )
}


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={M.submit}>
            <div>
                <Field component={TextArea}
                       name="newMessageElement"
                       validate={[required]}
                />
            </div>

            <div>
                <button>
                    Send!
                </button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: " DialogAddMessageForm"})(AddMessageForm)


export default Messages