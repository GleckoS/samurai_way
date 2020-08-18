import React from "react"
import H from "./Header.module.css"

function Header(props) {
    return (
        <header className={H.main}>
            <div className={H.container}>
                <div className={H.wrapper}>
                    <div className={H.search}>
                        <input type="text" placeholder="Search:"/>
                    </div>
                    <div className={H.alert}>
                        <a href="#">Alerts</a>
                    </div>
                    <div className={H.music}>
                        <a href="#">Music</a>
                    </div>
                    <div className={H.name}>
                        {props.name}
                    </div>
                    <div className={H.img}>
                        <img src={props.img}/>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header