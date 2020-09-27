import React from "react";
import L from "./Loading.module.css"

const Loading = () => {
    return (
        <div className={L.lds_default}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loading