import { connect } from "react-redux";
import { fetchListings, 
    fetchListing, 
    createListing, 
    updateListing, 
    deleteListing 
} from "../../actions/listing_actions";
import Listing from "./listing_show";

const mSTP = ( state , ownProps) => ({
    listing: state.entities.listings[ownProps.match.params.listingId],
    user: state.entities.users
    
})

const mDTP = dispatch => ({
    fetchListings: () => dispatch(fetchListings()),
    fetchListing: listingId => dispatch(fetchListing(listingId)),
    createListing: listing => dispatch(createListing(listing)),
    updateListing: listing => dispatch(updateListing(listing)),
    deleteListing: listingId => dispatch(deleteListing(listingId))
})

export default connect(mSTP, mDTP)(Listing)