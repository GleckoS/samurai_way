import React from "react";
import U from "./Users.module.css";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let curPage = props.currentPage
    return (
        <div className={U.main}>
            <div className={U.navigation}>
                    <span onClick={() => {
                        props.onPageChangedDOWN(curPage)
                    }}>
                        Prev
                    </span>
                <span className={U.selectedPage}>
                        {curPage}
                    </span>
                <span onClick={() => {
                    props.onPageChangedUP(curPage)
                }}>
                        Next
                    </span>
            </div>
            {/*Начало мапа*/}
            {props.users.map(u =>
                <div className={U.UserWrapper} key={u.id}>
                    <div>
                        <div>
                            <NavLink to={`/Profile/`+ u.id}>{u.img
                                ? <img alt="personal" className={U.PersonImg} src={u.img}/>
                                : <img alt="default" className={U.PersonImg}
                                       src="https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png"/>}
                            </NavLink>
                        </div>
                        <div>{u.followed
                            ? <button className={U.UsersBTN} onClick={() => {
                                props.Follow(u.id)
                            }}>Follow</button>
                            : <button className={U.UsersBTN} onClick={() => {
                                props.Follow(u.id)
                            }}>UnFollow</button>}
                        </div>
                    </div>
                    <div className={U.PersonName}>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </div>
                </div>
            )}
            {/*Конец мапа*/}
        </div>
    )

    }


export default Users

