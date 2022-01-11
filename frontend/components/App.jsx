import React from "react";
import { Route, Switch } from "react-router-dom";
import Modal from "./modal/modal";
import Footer from "./footer/footer";
import NavBarContainer from "./nav_bar/nav_bar_container";
import splash_container from "./splash/splash_container";
import listing_show_container from "./listings/listing_show_container";
import listings_index_container from "./listings/listings_index_container"
import CreateListingContainer from "./listings/listing_forms/create_listing_container";
import Map from "./map/map";
import edit_listing_container from "./listings/listing_forms/edit_listing_container";

const App = () => (

    <div className="page">
    <Modal />

    <header><NavBarContainer /></header>
    <Switch>
        <Route exact path="/" component={splash_container}/>
        <Route exact path="/listings/:listingId/edit" component={edit_listing_container} />
        <Route path="/listings/:listingId" component={listing_show_container} />
        <Route exact path="/new/listing" component={CreateListingContainer} />
        <Route exact path="/listings" component={listings_index_container} />
        <Route exact path="/map" component={Map} />
    </Switch>
    <footer><Footer /></footer>
    </div>
);

export default App;