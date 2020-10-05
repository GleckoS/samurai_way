import React from "react";
import P from "./Post.module.css"

function Post(props) {
    return (
        <div className={P.wrapper}>
            <div className={P.text}>
                {props.text}
            </div>
        </div>
    )
}

export default Post