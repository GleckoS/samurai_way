let initialNavState = {
    Friends:
        [
            {
                id: "1",
                img: "https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png",
                name: "Sasha",
            },
            {
                id: "2",
                img: "https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png",
                name: "Dima",
            },
            {
                id: "3",
                img: "https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png",
                name: "Roma",
            },
        ],
}

const NavReducer = (state = initialNavState, action) => {


    return state
}

export default NavReducer