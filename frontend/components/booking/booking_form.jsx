import React from "react";
import { fetchBookings } from "../../actions/booking_actions";
import { AiFillStar } from "react-icons/ai";

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
        this.checkOutDate = this.checkOutDate.bind(this)
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

    checkOutDate() {
    var ms = new Date().getTime() + 86400000;
    var tomorrow = new Date(ms);
    return tomorrow.toISOString().split('T')[0]
    }

    render() {
        // debugger
        return(
            <div className="booking-form-container">
                <div className="booking-formbox">
                    <div className="bookingformtop">
                        <div className="bookingformtopleft">
                            <div className="bookingformprice">
                            ${this.props.listing.price} {" "}
                            </div>
                            <div className="bookingformprice2">
                            {" "}/ night
                            </div>
                        </div>
                        <div className="bookingformtopright">
                            <div className="rstar"><AiFillStar /> </div> 4.91 • 120 reviews
                        </div>
                    </div>
                    <form className="booking-form" onSubmit={this.handleSubmit}>
                        <div className="booking-form-inner-box">
                            <div className="booking-form-date">
                                <div className="check-in-date-form" id="cd1">
                                    <label className="CIDF">CHECK-IN</label>
                                    <input type="date" onChange={this.update("check_in_date")} min={new Date().toISOString().split('T')[0]}/>
                                </div>
                                <div className="check-in-date-form" id="cd2">
                                    <label className="CIDF">CHECKOUT</label>
                                    <input type="date" onChange={this.update("check_out_date")} min={this.checkOutDate()} />
                                </div>
                            </div>
                            <div className="booking-form-guest">
                                <label id="booking-guests">NUMBER OF GUESTS </label>
                                <select onChange={this.update("number_of_guests")}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <button className="flexible_button" id="booking-button">Book me</button>
                        <div> You won't be charged yet </div>
                        <div> {this.checkOutDate()} </div>
                    </form>
                </div>

            </div>
        )
    }


}

export default BookingForm;