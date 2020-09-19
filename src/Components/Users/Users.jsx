import React, {Component} from "react";


export default class Users extends Component {


    render() {

        if (this.props.users.length === 0) {


            debugger

            this.props.setUsers([{
                id: 1,
                photoUrl: `https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png`,
                followed: false,
                fullName: "Bohdan",
                status: "HAVAHEYO",
                location: {city: `Krakow`, country: `Poland`}
            },
                {
                    id: 2,
                    photoUrl: `https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png`,
                    followed: true,
                    fullName: "Ehor",
                    status: "HAEYO",
                    location: {city: `Odessa`, country: `Ukraine`}
                },
                {
                    id: 3,
                    photoUrl: `https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png`,
                    followed: false,
                    fullName: "Dima",
                    status: "HAVAHYO",
                    location: {city: `Minsk`, country: `Belarus`}
                },
                {
                    id: 4,
                    photoUrl: `https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png`,
                    followed: false,
                    fullName: "Anton",
                    status: "HAVAHE",
                    location: {city: `Moscow`, country: `Russia`}
                },
                {
                    id: 5,
                    photoUrl: `https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png`,
                    followed: false,
                    fullName: "Roma",
                    status: "HHEYO",
                    location: {city: `Tokio`, country: `Japan`}
                }])
        }

        return (
            <div>

                {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unFollow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                this.props.follows(u.id)
                            }}>UnFollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.location.country}
                        </div>
                        <div>
                            {u.location.city}
                        </div>
                    </span>
                </span>
                </div>)},

            </div>
        )

    }
}




