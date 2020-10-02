import React from "react"
import H from "./Header.module.css"
import {NavLink} from "react-router-dom";

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
                    {props.isAuth
                        ? <>
                            <div className={H.name}>
                                {props.login}
                            </div>
                            <div className={H.img}>
                                <img src={props.img}/>
                            </div>
                        </>
                        : <div>
                        <NavLink to={"/login"} className={H.login}>Login</NavLink>
                        </div>
                        }
                </div>
            </div>
        </header>
    )
}

export default Header