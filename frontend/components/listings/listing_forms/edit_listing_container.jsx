import { connect } from "react-redux";
import { fetchListing, updateListing } from "../../../actions/listing_actions";
import EditListingForm from "./edit_listing_form";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
    return{
        listing: state.entities.listings[ownProps.match.params.listingId],
        formType: "Edit Listing",
    }
}

const mDTP = (dispatch) => ({
    fetchListing: listingId => dispatch(fetchListing(listingId)),
    updateListing: (listing,listingId) => dispatch(updateListing(listing,listingId))
})

export default withRouter(connect(mSTP,mDTP)(EditListingForm));