import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteBooking, fetchBookings } from "../../actions/booking_actions";
import Trips from "./trips";
const mSTP = ({entities, session}) => ({
    currentUser: entities.users[session.id],
    bookings: Object.values(entities.bookings)
})

const mDTP = dispatch => ({
    fetchBookings: () => dispatch(fetchBookings()),
    deleteBooking: () => dispatch(deleteBooking(bookingId))
})

export default withRouter(connect(mSTP, mDTP)(Trips))