import React from "react";
import { Link } from "react-router-dom";
import { FaDoorOpen, FaUtensils, FaTv } from "react-icons/fa/index"
import { HiSparkles, HiOutlineHome, HiOutlineCalendar, HiOutlineWifi} from "react-icons/hi/index"
import {IoIosSnow} from "react-icons/io/index"
import {GiButterflyFlower, GiCctvCamera, GiHanger} from "react-icons/gi/index"
import {GrDocker} from "react-icons/gr/index"
import {CgSmartHomeWashMachine} from "react-icons/cg/index"
import {AiOutlineCar} from "react-icons/ai/index"
import Map from "../map/map";
import MapContainer from "../map/map_container";
import { AiFillStar } from "react-icons/ai";
import BookingFormContainer from "../booking/booking_form_container";

class Listing extends React.Component {
    constructor(props) {
        super(props)
        // debugger
        this.state = {
            user: this.props.user
        }
    }

    componentDidMount() {
        this.props.fetchListing(this.props.match.params.listingId)
        // .then(() => {this.setState({ loading: false,})})
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.listingId !== this.props.match.params.listingId){
        this.props.fetchListing(this.props.match.params.listingId)}
    }

    editlisting() {
        if (Object.keys(this.props.user).length === 0) {
            return (<> </>)
        } else {
            // debugger
            if (this.props.user && (this.props.user[1].id === this.props.listing.host_id)){
                return (                                
                    <Link to={`${this.props.listing.id}/edit/`} className="editbutton"> Edit Listing</Link>
                )
            } 
        }

    }

    render() {
        const { listing } = this.props
        // debugger
        if (!listing) return (<h1> Loading </h1>);
        return(
            <div className="lister">
                <div className="listingshowpage">
                    <div className="title-container">
                        <div className="title"> {listing.title}</div>
                        <div className="details">
                            <div className="rstarrate">
                                5.00 <div className="rstar"><AiFillStar /> </div>
                            </div> 
                         • 420 Reviews • {listing.address} </div>
                    </div>
                    <div className="listingphotos"> 
                        <div className="photo1">
                            <img src={listing.photos[0]} alt="" className="lphoto1"/>
                        </div>
                        <div className="photo23container">
                            <div className="photo2">
                                <img src={listing.photos[1]} alt="" className="lphoto2" />
                            </div>
                            <div className="photo3">
                                <img src={listing.photos[2]} alt="" className="lphoto3"/>
                            </div>
                        </div>
                        <div className="photo45container">
                            <div className="photo4">
                                <img src={listing.photos[3]} alt="" className="lphoto4" />
                            </div>
                            <div className="photo5">
                                <img src={listing.photos[4]} alt="" className="lphoto5" />
                            </div>
                        </div>
                    </div>
                    <div className="middlelisting"> 
                        <div className="listingleft">
                            <div className="listingleft1">
                                <div className="lltitle">Entire place available
                                    <div className="lldetail"> {listing.guest_limit} guests • {listing.bedrooms} beds • {listing.bathrooms} baths</div>
                                </div>
                                <div className="lledit">
                                    {this.editlisting()}
                                </div>
                                <div className="llprofile">
                                    <img src={listing.photoUrl} className="llprofile"/>
                                </div>
                            </div>
                            <div className="listingleft2">
                                <div className="lhome">
                                    <div className="lhomeicon"> <HiOutlineHome/> </div>
                                    <div className="lhomeinfo">Entire Home
                                        <div className="lhomedetail">You’ll have the place to yourself.</div>
                                    </div>
    
                                </div>

                                <div className="lhome">
                                    <div className="lhomeicon"> <HiSparkles/> </div>
                                    <div className="lhomeinfo">Enhanced Clean
                                        <div className="lhomedetail">This Host committed to Airbnb's 5-step enhanced cleaning process.</div>
                                    </div>
                                    
                                </div>

                                <div className="lhome">
                                    <div className="lhomeicon"> <FaDoorOpen/> </div>
                                    <div className="lhomeinfo">Self-check-in <div className="lhomedetail">You get keys I guess?</div></div>
                                    
                                </div>

                                <div className="lhome">
                                    <div className="lhomeicon"><HiOutlineCalendar /></div>
                                    <div className="lhomeinfo">Free cancellation for 24 hours <div className="lhomedetail"></div></div>
                                </div>

                            </div>
                            <div className="ldescription"> Been looking for a 1 bed home (all upstairs) in Fairfield? You have just found it. Main house features many unique finishes-double car attached garage, 12mm free standing glass railings & White Cabinetry/Granite counters. Open House Saturday 5th 1-3pm.</div>
                            <div className="lsleep">Where you'll sleep</div>
                            <div className="listingphotosbeds">
                                    <div className="photo67">
                                    <img src={listing.photos[5]} alt="" className="lphoto6" />
                                    </div>
                                    <div className="photo67">
                                    <img src={listing.photos[6]} alt="" className="lphoto6" />
                                    </div>
                                
                            </div>
                            <div className="offers">What this place offers</div>
                                <div className="amenities">
                                    <div className="amenitiesleft">
                                        <div className="am1">
                                            <div className="a-icon"><HiOutlineWifi/></div>
                                            <div className="a-desc">WiFi</div>
                                        </div>
                                        <div className="am1">
                                            <div className="a-icon"><IoIosSnow/></div>
                                            <div className="a-desc">Air Conditioning</div>
                                        </div>
                                        <div className="am1">
                                            <div className="a-icon"><FaTv/></div>
                                            <div className="a-desc">Television</div>
                                        </div>
                                        <div className="am1">
                                            <div className="a-icon"><GiButterflyFlower/></div>
                                            <div className="a-desc">Backyard</div>
                                        </div>
                                        <div className="am1">
                                            <div className="a-icon"><GrDocker/></div>
                                            <div className="a-desc">Waterfront</div>
                                        </div>
                                    </div>
                                    <div className="amenitiesright">
                                        <div className="am1">
                                            <div className="a-icon"><FaUtensils /></div>
                                            <div className="a-desc">Kitchen</div>
                                        </div>
                                        <div className="am1">
                                            <div className="a-icon"><CgSmartHomeWashMachine /></div>
                                            <div className="a-desc">Washing Machine</div>
                                        </div>
                                        <div className="am1">
                                            <div className="a-icon"><AiOutlineCar /></div>
                                            <div className="a-desc">Parking</div>
                                        </div>
                                        <div className="am1">
                                            <div className="a-icon"><GiHanger /></div>
                                            <div className="a-desc">Hangers</div>
                                        </div>
                                        <div className="am1">
                                            <div className="a-icon"><GiCctvCamera /></div>
                                            <div className="a-desc">Security cameras on property</div>
                                        </div>
                                    </div>
                                </div>
                            {/* <div className="calendar"> Calendar</div>
                            <div className="calendar-container">
                                <img src={window.calendar_url} alt="" className="calendar-item" />
                            </div> */}
                        </div>

                        <div className="listingright">
                            {/* <div> <img src={window.booking_url} alt="" className="booker"/></div> */}
                            <BookingFormContainer listing={listing}/>
                        </div>
                    </div>
                    {/* <div> Reviews Container</div> */}
                    <div> <MapContainer listings={listing} singleListing={true}/>  </div>
                    {/* <div> Host Info</div> */}
                </div>
            </div>
        );
    }
}

export default Listing;