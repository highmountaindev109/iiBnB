import React from "react";

class Trips extends React.Component{

    constructor(props){
        super(props);

    }

    componentDidMount() {
        this.props.fetchBookings()
        debugger
    }

    render(){
        if (this.props.bookings === 0) {
            return (<div>Loading</div>)
        }
        debugger
        return (
            <div className="trip-container">
                Trips
                <br />
                {this.props.bookings.map ((booking,i) => (
                    `
                    booking_id: ${booking.id}, 
                    number of guests: ${booking.number_of_guests},
                    check-in-date: ${booking.check_in_date},
                    check-out-date: ${booking.check_out_date}`
                ))}
            </div>
        )}

}

export default Trips;