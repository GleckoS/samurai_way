import React from "react"
import M from  "./Message.module.css"

const Message = (props) => {
    return (
        <li className={M.wrap}>
            <span className={M.img}>
                <img alt="friend or you" src={props.img}/>
            </span>
            <span className={M.text}>
                {props.text}
            </span>
        </li>
    )
}

export default Message