import React from "react"
import D from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";






function Dialogs(props) {

    let DialogsElements = props.DialogsData.map(dialog => <li className={D.li}><NavLink to={"Dialogs/" + [dialog.id]}><Dialog
        name={dialog.name} id={dialog.id} img={dialog.img} text={dialog.text}/></NavLink></li>)

    return (
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