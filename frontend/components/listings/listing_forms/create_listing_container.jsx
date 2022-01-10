import React from "react";
import { connect } from "react-redux";
import CreateListing from "./create_listing";
import { createListing } from "../../../actions/listing_actions";

const mSTP = state => ({
    listing: {
        host_id: state.session.id,
        title: "",
        description: "",
        address: "",
        guest_limit: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
    },
    formType: "Create Listing"
});

const mDTP = dispatch => ({
    createListing: listing => dispatch(createListing(listing))
})

export default connect(mSTP,mDTP)(CreateListing)