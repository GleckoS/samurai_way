import React from "react"
import P from "./Profile.module.css"
import Post from "./Post/Post";
import Loading from "../Loading/Loading";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {TextArea} from "../../commonComponents/TextArea";


let Profile = (props) => {
    let PostsCreator = props.Posts.map(post =>
        <li className={P.li}>
            <Post id={post.id} text={post.text}/>
        </li>)

    let AddPost = (values) => {
        props.addPost(values.newPostElement)
    }
    let defaultUserImg = "https://blachymaxsystem.pl/wp-content/uploads/2019/01/unknown-user.png"

    if(!props.Profile){
        return <Loading/>
    } else {
        return (
            <section className={P.main}>
                <div className={P.container}>
                    <div className={P.wrapper}>
                        <div className={P.profile}>
                            <div className={P.img}>
                                <img src={props.Profile.photos.large ? props.Profile.photos.large : defaultUserImg}
                                     alt="person img"/>
                            </div>
                            <div className={P.person}>
                                <div className={P.name}>
                                    {props.Profile.fullName}
                                </div>
                                <div>
                                    <ProfileStatus profileStatus={props.ProfileStatus} updateProfileStatusThunkCreator={props.updateProfileStatusThunkCreator}/>
                                </div>
                                <div className={P.inf}>
                                    <div>
                                        {props.Profile.aboutMe}
                                    </div>
                                    <div>
                                        Ищу работу: {props.Profile.lookingForAJob ? "Yes" : "No"}
                                    </div>
                                    <div>
                                        Коменнтарий: {props.Profile.lookingForAJobDescription}
                                    </div>

                                    <div>
                                        {props.Profile.contacts.vk ? `Vk: ${props.Profile.contacts.vk}`: null}
                                    </div>
                                    <div>
                                        {props.Profile.contacts.github ? `GitHub: ${props.Profile.contacts.github}`: null}
                                    </div>
                                    <div>
                                        {props.Profile.contacts.facebook ? `FaceBook: ${props.Profile.contacts.facebook}`: null}
                                    </div>
                                    <div>
                                        {props.Profile.contacts.twitter ? `Twitter: ${props.Profile.contacts.twitter}`: null}
                                    </div>
                                    <div>
                                        {props.Profile.contacts.website ? `Website: ${props.Profile.contacts.website}`: null}
                                    </div>
                                    <div>
                                        {props.Profile.contacts.youtube ? `Youtube: ${props.Profile.contacts.youtube}`: null}
                                    </div>
                                    <div>
                                        {props.Profile.contacts.mainLink ? `MainLink: ${props.Profile.contacts.mainLink}`: null}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={P.submittWrapper}>

                            <div className={P.posts}>
                                <ul>
                                    {PostsCreator}
                                </ul>
                            </div>
                            <AddPostFormRedux  onSubmit={AddPost}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}



const maxLength50 = maxLengthCreator(50)



const AddPostForm = (props) => {
    return (
        <form  onSubmit={props.handleSubmit} className={P.submit}>
            <div>
                <Field component={TextArea}
                          name="newPostElement"
                          className={P.textArea}
                       placeholder="Enter post:"
                         validate={[ required, maxLength50]}
                />
            </div>
            <div>
                <button>
                    Post!
                </button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "ProfileAddPostForm"})(AddPostForm)

export default Profile