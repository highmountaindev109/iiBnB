import React from "react";
import { Route } from "react-router-dom";
import Modal from "./modal/modal";
import Footer from "./footer/footer";
import NavBarContainer from "./nav_bar/nav_bar_container";
import splash_container from "./splash/splash_container";
import listing_show_container from "./listings/listing_show_container";
const App = () => (

    <div className="page">
    <Modal />
    {/* <header><NavBarContainer /></header> */}
        <Route exact path="/" component={splash_container}/>
        <Route path="/listings/:listingId" component={listing_show_container} />
    {/* <footer><Footer /></footer> */}
    </div>
);

export default App;