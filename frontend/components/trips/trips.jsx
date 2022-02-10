import React from "react";
import { Link } from "react-router-dom";
class Trips extends React.Component{

    constructor(props){
        super(props);
        this.HandleDeleteBooking = this.HandleDeleteBooking.bind(this);
    }

    componentDidMount() {
        this.props.fetchBookings()
    }

    HandleDeleteBooking(e) {
        e.preventDefault();
        // let bookingId = e.currentTarget.value
        this.props.deleteBooking(e.currentTarget.value)
        .then(() => this.props.fetchBookings())
    }

    render(){
        if (this.props.bookings === 0) {
            return (<div>Loading</div>)
        }
        // debugger
        return (
            <div className="trip-container">
                <div className="trip-category"> Trips </div>
                <div className="trips-item">
                    
                {this.props.bookings.map ((booking,i) => (
                    <div className="bookings-container" key={i} >
                        <Link to={`/listings/${booking.listing.id}`}>
                        <div className="trips-left">
                            <img src={booking.listingPhoto} alt="" className="tripphoto"/>
                        </div>
                        </Link>
                         <Link to={`/listings/${booking.listing.id}`} className="trips-middle">
                            <div className="trips-middle">
                                <div style={{fontWeight: 'bold'}} className="trips-title">{booking.listing.title}</div>
                                <div className="trip-address">{booking.listing.address}</div>
                                <div className="trip-host">
                                    Hosted by {booking.host.first_name}
                                </div>
                                <div className="trip-date">
                                {(new Date(booking.check_in_date)).toLocaleDateString("en-us", {month: 'short', day: 'numeric'})}
                                -{(new Date(booking.check_out_date)).toLocaleDateString("en-us", {month: 'short', day: 'numeric', year: 'numeric'})}
                                </div>
                                <div>
                                </div>
                            </div>
                         </Link>
                        <div className="trips-right">
                            <button onClick={this.HandleDeleteBooking} value={booking.id}>
                                Cancel
                            <br/> 
                                Booking
                            </button>
                        </div>
                    </div>
                )
            )
        }
                </div>
            </div>
        )}

}

export default Trips;