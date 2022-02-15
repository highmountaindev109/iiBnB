# FullStack Project: [iiBnB](https://iibnb.herokuapp.com/#/)

<img width="1029" alt="Screen Shot 2021-12-02 at 10 43 18 PM" src="https://media.giphy.com/media/q9LEfaN1ZEHIUFotDC/giphy.gif">
## Overview

iiBnB is an [AirBnB](https://www.airbnb.com/) clone, where users can view listings available to reserve and create listings to host. 
The user is able to navigate the site through the search bar and clicking on results provided by the search as well as scrolling through the map.
The listings have information pertaining to the content of the listing so users can view details about the place before reserving.

## Functionality & MVPs

In iiBi, users will be able to :
<li> Sign up and sign into an account</li>
<li> View, create, and edit listings </li>
<li> Search an area for available listings </li>
<li> Scroll around the map to load more listings within bound </li>
<li> Make reservations/bookings for trips </li>

 ## Technologies, Libraries, APIs
This project will be implemented with the following technologies: 
<li> Ruby on Rails framework
<li> Webpack to bundle the source JavaScript code
<li> Babel to transpile JavaScript for older browsers
<li> PostgresSQL Database
<li> AWS S3 Media Storage
<li> React, Redux, and jQuery to handle the state of the front-end
<li> Google Maps API for map functionality and search autocomplete functionality
</li>

## Future implementations/ work in progress
This project is still far from complete.
Future functionalities to implement in the near future include:
<li> A User profile to manage listings and other features in an intuitive manner
<li> Being able to view, create, edit, and delete reviews



## Snippets
 
### Trips display
I created a noTrips() function to account for when a user is not logged in to load a different view for the component. 
It avoids throwing error when a user has no bookings/reservations made.

```
 noTrips(){
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
                                </div>
                            </Link>
                            <div className="trips-right">
                                <button onClick={this.HandleDeleteBooking} value={booking.id}>
                                    <MdFreeCancellation className="trip-del-btn"/> 
                                    <div className="trip-del-btn-text">
                                    Cancel<br/>Booking
                                    </div>
                                </button>
                            </div>
                        </div>
                        ))}
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
            </div>
        )
    }```

### Booking/Reservation
An issue I had was when a user tried to submit a booking/reservation form while not logged in, it would throw an error so I created this to bypass having no logged-in user.

```
    componentDidMount(){
        if (this.props.currentUser) {
            this.setState({guest_id: this.props.currentUser.id})
        }
    }

    componentDidUpdate(prevProps){
        if ((this.props.currentUser) && (this.props.currentUser !== prevProps.currentUser)) {
            this.setState({guest_id:this.props.currentUser.id})
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.props.currentUser) {
            this.props.createBooking(this.state);
            this.props.history.push(`/trips`)
            window.location.reload(true)
        } else {
            this.props.signup()
        }
    }
```
### ###

