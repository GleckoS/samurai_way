import React from "react";
import U from "./Users.module.css";
import {NavLink} from "react-router-dom";

const Users = (props) => {



    return (
        <div className={U.main}>
            <div className={U.navigation}>
                    <span onClick={() => {
                        props.onPageChangedDOWN()
                    }}>
                        Prev
                    </span>
                <span className={U.selectedPage}>
                        {props.currentPage}
                    </span>
                <span onClick={() => {
                    props.onPageChangedUP()
                }}>
                        Next
                    </span>
            </div>
            {/*Начало мапа*/}
            {props.users.map(u =>
                <div className={U.UserWrapper} key={u.id}>
                    <div>
                        <div>
                            <NavLink to={`/Profile/` + u.id}>{u.img
                                ? <img alt="personal" className={U.PersonImg} src={u.img}/>
                                : <img alt="default" className={U.PersonImg}
                                       src="https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png"/>}
                            </NavLink>
                        </div>
                        <div>
                            <button disabled={props.FollowingInProgress.some(id => id === u.id)} className={U.UsersBTN} onClick={() => {
                                props.followUnFollow(u.id, u.followed)
                            }}>{u.followed ? "UnFollow" : "Follow"}
                            </button>
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

