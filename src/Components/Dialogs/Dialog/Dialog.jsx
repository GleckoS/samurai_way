import React from "react"
import D from "./Dialog.module.css"

function Dialog(props){
    return(
        <div className={D.wrapper}>
            <span className={D.img}>
                <img className={D.avatar}
                     src={props.avatarUrl}
                     alt=""
                />
            </span>
            <span className={D.name}>
                {props.name}
            </span>
            <div className={D.short}>
                {props.text}
            </div>
        </div>
    )
}

export default Dialog