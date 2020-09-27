import React from "react"
import P from "./Profile.module.css"
import Post from "./Post/Post";
import Loading from "../Loading/Loading";


let Profile = (props) => {

    let newPostElement = React.createRef()

    let PostsCreator = props.Posts.map(post =>
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

    if(!props.Profile){
        return <Loading/>
    } else {

        return (
            <container className={P.main}>
                <div className={P.container}>
                    <div className={P.wrapper}>
                        <div className={P.profile}>
                            <div className={P.img}>
                                <img src={props.Profile.photos.large}
                                     alt="person img"/>
                            </div>
                            <div className={P.person}>
                                <div className={P.name}>
                                    {props.Profile.fullName}
                                </div>
                                <div className={P.inf}>
                                    <div>
                                        {props.Profile.aboutMe}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={P.submittWrapper}>
                            <div className={P.submit}>
                                <div>
                                <textarea ref={newPostElement} onChange={OnPostChange}
                                          value={props.NewPostText}
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
                                    {PostsCreator}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </container>
        )
    }
}

export default Profile