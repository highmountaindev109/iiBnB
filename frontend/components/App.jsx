import React from "react";
import { Route } from "react-router-dom";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { FaRegUserCircle } from "react-icons/fa/index"
import signup_form_container from "./session_form/signup_form_container";
import login_form_container from "./session_form/login_form_container";
import splash_container from "./splash/splash_container";

const App = () => (
    <div>
    <NavBarContainer/>
        <Route path="/" component={splash_container}/>
        <Route path="/signup" component={signup_form_container}/>
        <Route path="/login" component={login_form_container}/>
        {/* <FaRegUserCircle /> */}
    </div>
);

export default App;