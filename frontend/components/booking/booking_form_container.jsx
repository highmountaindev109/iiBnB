import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createBooking } from "../../actions/booking_actions";
import { openModal } from "../../actions/modal_action";
import BookingForm from "./booking_form";

const mSTP = ({entities, session}) => {
    return({
        currentUser: entities.users[session.id],
        // listing: entities.listings
    })
}

const mDTP = dispatch => ({
    createBooking: (booking) => dispatch(createBooking(booking)),
    signup: () => dispatch(openModal('signup'))
})

export default withRouter(connect(mSTP, mDTP)(BookingForm))