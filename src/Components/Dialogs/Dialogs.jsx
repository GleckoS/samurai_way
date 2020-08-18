import React from "react"
import D from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";

let DialogsData = [
    {id: 1, name:"Bohdan", img:"https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png", text:"lorem ipsum dolor sit amet..."},
    {id: 2, name:"Ehor", img:"https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png", text:"lorem ipsum dolor sit amet..."},
    {id: 3, name:"Ilia", img:"https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png", text:"lorem ipsum dolor sit amet..."},
    {id: 4, name:"Dima", img:"https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png", text:"lorem ipsum dolor sit amet..."},
    {id: 5, name:"Nikita", img:"https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png", text:"lorem ipsum dolor sit amet..."},
    {id: 6, name:"Katya", img:"https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png", text:"lorem ipsum dolor sit amet..."}
]

let DialogsElements = DialogsData.map( dialog => <li className={D.li}><NavLink to={"/"+[dialog.id]}><Dialog name={dialog.name} id={dialog.id} img={dialog.img} text={dialog.text}/></NavLink></li>)


function Dialogs(){
    return(
        <container className={D.main}>
            <div className={D.container}>
                <div className={D.wrapper}>
                    <ul>
                        {DialogsElements}
                    </ul>
                </div>
            </div>
        </container>
    )
}

export default Dialogs