import { connect } from "react-redux";
import updateFilter from "../../actions/filter_actions";
import { fetchListings } from "../../actions/listing_actions";
import Search from "./search";

const mSTP = (state, ownProps) => {
    return {
        listings: Object.values(state.entities.listings),
        currentUser: state.entities.users[state.session.id],
        latitude: ownProps.location.search.split('&')[0].slice(1),
        longitude: ownProps.location.search.split('&')[1]
    }
}

const mDTP = (dispatch) => ({
    // fetchListings: () => dispatch(fetchListings()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mSTP, mDTP)(Search)