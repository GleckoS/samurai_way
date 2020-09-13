import React from "react"
import M from  "./Message.module.css"

const Message = (props) => {

 //   const classs = "person" + ' ' + props.sender;

    return (
        <li className={M.wrap}>
            <span className={M.img}>
                <img src={props.img}/>
            </span>
            <span className={M.text}>
                {props.text}
            </span>
        </li>
    )
}

export default Message