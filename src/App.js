import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Footer from "./Components/Footer/Footer";
import {Route} from "react-router-dom";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import MessagesContainer from "./Components/Dialogs/Messages/MessagesContainer";
import UsersContainer from "./Components/Users/UsersContainer";


function App(props) {

    return (
        <div className="AppWrapper">
            <Header name="Bohdan"
                    img="https://previews.123rf.com/images/kritchanut/kritchanut1308/kritchanut130800013/21528486-male-avatar-profile-picture-vector.jpg"/>
            <NavBar Friends={props.Friends}/>

            <Route path="/Profile/:userID?" render={() => <ProfileContainer/>}/>
            <Route exact path="/Dialogs" render={() => <Dialogs DialogsData={props.DialogsData}/>}/>

            <Route exact path="/Dialogs/1" render={() => <MessagesContainer/>}/>

            <Route exact path="/Users" render={() => <UsersContainer/>}/>
            <Route exact path="/News" render={() => <News/>}/>
            <Route exact path="/Music" render={() => <Music/>}/>
            <Route exact path="/Settings" render={() => <Settings/>}/>
            <Footer/>
        </div>
    )
}


export default App;
