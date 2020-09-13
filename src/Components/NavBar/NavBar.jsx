import React from "react"
import N from "./NavBar.module.css"
import {NavLink} from "react-router-dom"
import Friends from "./Friends/Friends";


function NavBar(props) {

    let FriendsLi = props.Friends.map(Friend =>
        <li className={N.li}>
            <Friends  name={Friend.name} id={Friend.id} img={Friend.img}/>
        </li>)


    return (
        <nav className={N.main}>
            <div className={N.container}>
                <div className={N.wrapper}>
                    <ul className={N.nav}>
                        <li><NavLink to="/Profile">Home</NavLink></li>
                        <li><NavLink to="/Dialogs">Dialogs</NavLink></li>
                        <li><NavLink to="/News">News</NavLink></li>
                        <li><NavLink to="/Users">Users</NavLink></li>
                        <li><NavLink to="/Music">Music</NavLink></li>
                        <li><NavLink to="/Settings">Settings</NavLink></li>
                    </ul>
                    <div className={N.FriendsList}>
                        <div className={N.Friends}>
                            Friends List
                        </div>
                        <ul className={N.nav}>
                            {FriendsLi}
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar