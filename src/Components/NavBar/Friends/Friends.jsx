import React from "react"
import F from "./Friends.module.css"


function Friends(props) {

    return (

        <div className={F.wrapper}>
            <div className={F.img}>
                <img src={props.img} alt={props.id}/>
            </div>
            <div className={F.inf}>
                {props.name}
            </div>
        </div>

    )
}

export default Friends