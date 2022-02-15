import React from "react";
import { Link } from "react-router-dom";
import {MdFreeCancellation} from "react-icons/md/index"
class Trips extends React.Component{

    constructor(props){
        super(props);
        this.HandleDeleteBooking = this.HandleDeleteBooking.bind(this);
        this.noTrips = this.noTrips.bind(this)

        this.state = {
            loading:true
        }
    }

    componentDidMount() {
        this.props.fetchBookings().then(() => this.setState({loading:false}))
    }

    HandleDeleteBooking(e) {
        e.preventDefault();
        // let bookingId = e.currentTarget.value
        this.props.deleteBooking(e.currentTarget.value)
        .then(() => this.props.fetchBookings())
    }

    noTrips(){
        // debugger
        return (this.props.bookings.length > 0) ? (   
        <>
        <div className="trip-splash"></div>        
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
                                {(new Date((new Date(booking.check_in_date)).getTime() + (new Date(booking.check_in_date)).getTimezoneOffset() * 60000)).toLocaleString("en-us", {month: 'short', day: 'numeric'} )}
                                -{(new Date((new Date(booking.check_out_date)).getTime() + (new Date(booking.check_out_date)).getTimezoneOffset() * 60000)).toLocaleString("en-us", {month: 'short', day: 'numeric', year: 'numeric'} )}
                                </div>
                                <div>
                                </div>
                            </div>
                         </Link>
                        <div className="trips-right">
                            <button onClick={this.HandleDeleteBooking} value={booking.id}>
                                <MdFreeCancellation className="trip-del-btn"/> 
                                <div className="trip-del-btn-text">
                                Cancel
                                <br/>
                                Booking
                                </div>
                            </button>
                        </div>
                    </div>
                )
            )
        }
        </div>
        </>
        ) : (
            <div className="no-trips trip-splash" id="notrips-splash">
                    <h1 id="trips-text">
                    You have no trips planned yet! 
                    <br />
                    Check out some listings to reserve for your next trip!
                    <br />
                </h1>
                        <div className="button-wrapper" id="trip-button">
                            <Link to={`/listings`} className="flexible_button"> Let's go! </Link>
                        </div>
                    {/* <div className="trip-splash2"> */}

                    {/* </div> */}
            </div>
        )
    }

    render(){
        if (this.state.loading) {
            return (<div className="lds-facebook"><div></div><div></div><div></div></div>)
        }
        // debugger
        return (
            <div className="trip-container">
                <div className="trip-category"> Trips </div>
                {/* <div className="trip-splash"> </div> */}
                    {this.noTrips()}
            </div>
        )}
            
}

export default Trips;