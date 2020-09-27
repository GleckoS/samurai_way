import React from "react"
import M from './Messages.module.css'
import Message from "./Message/Message";

const Messages = (props) => {

    let newMessageElement = React.createRef()

    let Messages = props.MessagesData.map(message =>
        <Message sender={message.sender} img={message.img} text={message.text}/>
    )

    let OnMessageChange = () => {
        let text = newMessageElement.current.value
        props.OnMessageChange(text)
    }
    let AddMessage = () => {
        props.AddMessage()

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
                    <div className={M.submit}>
                        <div>
                            <textarea ref={newMessageElement} onChange={OnMessageChange}
                                      value={props.NewMessageText}
                                      className={M.textArea} rows="3"/>
                        </div>
                        <div>
                            <button onClick={AddMessage} type="submit" className={M.btn}>
                                Send!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Messages