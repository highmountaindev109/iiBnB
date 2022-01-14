import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchListings } from "../../actions/listing_actions";
import { fetchUser } from "../../actions/user_action";

const mSTP = ({entities, session}) => ({
    currentUser: entities.users[session.id]
})

const mDTP = dispatch => ({
    fetchListings: () => dispatch(fetchListings()),
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mSTP, mDTP)(Profile)