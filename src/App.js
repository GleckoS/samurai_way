import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import Home from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Footer from "./Components/Footer/Footer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="AppWrapper">
                <Header name="Bohdan"
                        img="https://previews.123rf.com/images/kritchanut/kritchanut1308/kritchanut130800013/21528486-male-avatar-profile-picture-vector.jpg"/>
                <NavBar/>
                <Route path="/Home" component={Home}/>
                <Route path="/Dialogs" component={Dialogs}/>
                <Route path="/News" component={News}/>
                <Route path="/Music" component={Music}/>
                <Route path="/Settings" component={Settings}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
};

export default App;
