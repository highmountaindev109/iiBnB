import { connect } from "react-redux";
import updateFilter from "../../actions/filter_actions";
import { fetchListings } from "../../actions/listing_actions";
import Search from "./search";

const mSTP = (state) => {
    return {
        listings: Object.values(state.entities.listings),
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = (dispatch) => ({
    // fetchListings: () => dispatch(fetchListings()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mSTP, mDTP)(Search)