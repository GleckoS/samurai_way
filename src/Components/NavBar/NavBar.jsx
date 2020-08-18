import React from "react"
import N from "./NavBar.module.css"
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <nav className={N.main}>
            <div className={N.container}>
                <div className={N.wrapper}>
                    <ul>
                        <li><NavLink to="/Home">Home</NavLink></li>
                        <li><NavLink to="/Dialogs">Dialogs</NavLink></li>
                        <li><NavLink to="/News">News</NavLink></li>
                        <li><NavLink to="/Music">Music</NavLink></li>
                        <li><NavLink to="/Settings">Settings</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar