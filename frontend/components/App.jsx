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
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import search_container from "./search/search_container";
import trips_container from "./trips/trips_container";


const App = () => (

    <div className="page">
    <Modal />

    <header><NavBarContainer /></header>
    <Switch>
        <Route exact path="/" component={splash_container}/>
        <ProtectedRoute exact path="/listings/:listingId/edit" component={edit_listing_container} />
        <Route path="/listings/:listingId" component={listing_show_container} />
        <ProtectedRoute exact path="/new/listing" component={CreateListingContainer} />
        <Route exact path="/listings" component={search_container} />
        <Route exact path="/map" component={Map} />
        <Route path="/search" component={search_container} />
        <ProtectedRoute exact path ="/trips" component={trips_container}/>
    </Switch>
    <footer><Footer /></footer>
    </div>
);

export default App;