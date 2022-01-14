import { connect } from "react-redux";
import { fetchListing, fetchListings} from "../../actions/listing_actions";
import Map from "./map";
import { withRouter } from "react-router-dom";

const mSTP = (state,ownProps) => {
    // debugger
    return(
   { listings: Object.values(state.entities.listings),
    listingId: ownProps.match.params.listingId,
    latitude: ownProps.location.search.split('&')[0].slice(1),
    longitude: ownProps.location.search.split('&')[1]
    }
)}

const mDTP = dispatch => ({ 
fetchListing: listingId => dispatch(fetchListing(listingId)),
fetchListings: (bounds) => dispatch(fetchListings(bounds))
})

export default withRouter(connect( mSTP,mDTP)(Map))