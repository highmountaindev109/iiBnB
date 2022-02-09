import React from "react";

class Trips extends React.Component{

    constructor(props){
        super(props);

    }

    componentDidMount() {
        this.props.fetchBookings()
    }

    render(){
        if (this.props.bookings === 0) {
            return (<div>Loading</div>)
        }
        // debugger
        return (
            <div className="trip-container">
                Trips
                {this.props.bookings.map ((booking,i) => (
                    <div className="bookings-container" key={i} >
                        <div>
                            <img src={booking.listingPhoto} alt="" className="indexphoto"/>
                        </div>
                        <div>
                            Your host: {booking.host.first_name}
                        </div>
                        <div>Booking Id: {booking.id}</div>
                        <div>
                        number of guests: {booking.number_of_guests}
                        </div>
                        <div>
                        Check-in-date:  {(new Date(booking.check_in_date)).toLocaleDateString("en-us", {month: 'long', day: 'numeric', weekday:'long', year: 'numeric'})}
                        </div>
                        <div>
                        Check-out-date: {(new Date(booking.check_out_date)).toLocaleDateString("en-us", {month: 'long', day: 'numeric', weekday:'long', year: 'numeric'})}
                        </div>
                    </div>
                )
            )
        }
            </div>
        )}

}

export default Trips;