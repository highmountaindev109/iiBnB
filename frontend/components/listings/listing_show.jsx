import React from "react";
import { Link } from "react-router-dom";
import { FaDoorOpen, FaUtensils, FaTv } from "react-icons/fa/index"
import { HiSparkles, HiOutlineHome, HiOutlineCalendar, HiOutlineWifi} from "react-icons/hi/index"
import {IoIosSnow} from "react-icons/io/index"
import {GiButterflyFlower, GiCctvCamera, GiHanger} from "react-icons/gi/index"
import {GrDocker} from "react-icons/gr/index"
import {CgSmartHomeWashMachine} from "react-icons/cg/index"
import {AiOutlineCar} from "react-icons/ai/index"
class Listing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listing: this.props.listings,
            loading: true
        }
    }

    componentDidMount() {
        this.props.fetchListing(this.props.match.params.listingId)
        .then(() => {this.setState({ loading: false})})
    }

    render() {
        if (this.state.loading) return (<h1> Loading </h1>);

        const { listing } = this.props
        return(
            <div className="lister">
                <div className="listingshowpage">
                    <div className="title-container">
                        <div className="title"> {listing.title}</div>
                        <div className="details">5.00 Star • 420 Reviews • {listing.address} </div>
                    </div>
                    <div className="listingphotos"> 
                        <div className="photo1">1</div>
                        <div className="photo23container">
                            <div className="photo2">2</div>
                            <div className="photo3">3</div>
                        </div>
                        <div className="photo45container">
                            <div className="photo4">4</div>
                            <div className="photo5">5</div>
                        </div>
                    </div>
                    <div className="middlelisting"> 
                        <div className="listingleft">
                            <div className="listingleft1">
                                <div className="lltitle">Entire cabin hosted
                                    <div className="lldetail"> {listing.guest_limit} guests • {listing.bedrooms} beds • {listing.bathrooms} baths</div>
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
                                    <div className="photo67">Photo 6</div>
                                    <div className="photo67">Photo 7</div>
                                
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
                            <div className="calendar"> Calendar</div>
                        </div>

                        <div className="listingright">
                            <div> Price</div>
                        </div>
                    </div>
                    <div> Reviews Container</div>
                    <div> Map Container </div>
                    <div> Host Info</div>
                    <div> Things to know</div>
                    <div> Around </div>
                    {/* < br/>
                    <div style={{color:"green", fontSize: "20px"} }> 
                        Title : {listing.title} <br />
                        Address: {listing.address} <br />
                        Description: {listing.description} <br />
                        Price: ${listing.price} <br />
                        Guests: {listing.guest_limit} <br />
                        Bedrooms: {listing.bedrooms} <br />
                        Bathrooms: {listing.bathrooms} <br />
                        Host Name: {listing.host.first_name} {listing.host.last_name} <br />
                        Host Email: {listing.host.email} <br />
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Listing;