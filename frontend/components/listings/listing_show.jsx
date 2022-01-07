import React from "react";
import { Link } from "react-router-dom";

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
                    <div className="title-container"> Title Container
                        <div className="title"> {listing.title}</div>
                        <div className="details"></div>
                    </div>
                    <div className="listingphotos"> Photos Container
                        <div className="photo1">1</div>
                        <div className="photo2345">2345
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                        </div>
                    </div>
                    <div> Container for Info and Price 
                        <div className="listingleft">
                            <div className="listingleft1">
                                <div>Entire cabin hosted
                                    <div> guests, beds, baths</div>
                                </div>
                                <div>profilepic</div>
                            </div>
                            <div className="listingleft2">
                                Entire Home
                                Enhanced Clean
                                Self Check In
                                Free Cancellation
                            </div>
                            <div className="description">Description</div>
                            <div className="listingphotosbeds">
                                <div className="67">Photo 6</div>
                                <div className="67">Photo 7</div>
                            </div>
                            <div className="offers">Amenities</div>
                            <div className="Calendar"> Calendar</div>
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
                    <div> something </div>
                </div>
            </div>
        );
    }
}

export default Listing;