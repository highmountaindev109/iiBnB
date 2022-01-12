import { connect } from "react-redux";
import { fetchListing } from "../../actions/listing_actions";
import Map from "./map";
import { withRouter } from "react-router-dom";

const mSTP = (state,ownProps) => {
    return(
   { listings: Object.values(state.entities.listings),
    listingId: ownProps.match.params.listingId
    }
)}

const mDTP = dispatch => ({ 
fetchListing: listingId => dispatch(fetchListing(listingId))
})

export default withRouter(connect( mSTP,mDTP)(Map))