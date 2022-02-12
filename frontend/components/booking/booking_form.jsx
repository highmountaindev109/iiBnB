import React from "react";
import { fetchBookings } from "../../actions/booking_actions";

class BookingForm extends React.Component{
    constructor(props){
        super(props)
        // debugger
        this.state = {
            listing_id: this.props.match.params.listingId,
            guest_id: this.props.currentUser.id,
            check_in_date: '',
            check_out_date: '',
            number_of_guests: '1'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        this.props.createBooking(this.state);
        this.props.history.push(`/trips`)
        window.location.reload(true)
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render() {
        debugger
        return(
            <div className="booking-form-container">
                ${this.props.listing.price}/night
                <form className="booking-form" onSubmit={this.handleSubmit}>
                    <div className="booking-form-inner-box">
                        <div className="booking-form-date">
                            <div className="check-in-date-form" id="cd1">
                                <label className="CIDF">Check In Date</label>
                                <input type="date" onChange={this.update("check_in_date")} />
                            </div>
                            <div className="check-in-date-form" id="cd2">
                                <label className="CIDF">Check Out Date</label>
                                <input type="date" onChange={this.update("check_out_date")} />
                            </div>
                        </div>
                        <div className="booking-form-guest">
                            <label id="booking-guests">Number of guests</label>
                            <select onChange={this.update("number_of_guests")}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    <button>Book me</button>
                </form>

            </div>
        )
    }


}

export default BookingForm;