import React from "react";
import { Route } from "react-router-dom";
import Modal from "./modal/modal";
import Footer from "./footer/footer";
import NavBarContainer from "./nav_bar/nav_bar_container";
import splash_container from "./splash/splash_container";
const App = () => (
    <div className="page">
    <Modal />
    <NavBarContainer />
        <Route exact path="/" component={splash_container}/>
        {/* <Route path="/listings/:listingId" component={} /> */}
    <Footer />
    </div>
);

export default App;