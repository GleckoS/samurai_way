import React from "react"
import P from "./Profile.module.css"
import Post from "./Post/Post";

function Profile(props) {

    let newPostElement = React.createRef()

    let Posts = props.Posts.map(post =>
        <li className={P.li}>
            <Post id={post.id} img={post.emoji} text={post.text}/>
        </li>)

    let OnPostChange = () => {
        let text = newPostElement.current.value
        props.OnPostChange(text)
    }
    let onAddPost = () => {
        props.addPost()
    }

    return (
        <container className={P.main}>
            <div className={P.container}>
                <div className={P.wrapper}>
                    <div className={P.profile}>
                        <div className={P.img}>
                            <img src="https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png"
                                 alt="person img"/>
                        </div>
                        <div className={P.person}>
                            <div className={P.name}>
                                Bohdan Shevchenko
                            </div>
                            <div className={P.inf}>
                                <div>
                                    Birth Date: 25.05.2002
                                </div>
                                <div>
                                    Birth Place: Woznesensk, Ukraine
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={P.submittWrapper}>
                        <div className={P.submit}>
                            <div>
                                <textarea ref={newPostElement} onChange={OnPostChange} value={props.NewPostText}
                                          className={P.textArea} rows="3"/>
                            </div>
                            <div>
                                <button onClick={onAddPost} type="submit" className={P.btn}>
                                    Post!
                                </button>
                            </div>
                        </div>
                        <div className={P.posts}>
                            <ul>
                                {Posts}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </container>
    )
}

export default Profile