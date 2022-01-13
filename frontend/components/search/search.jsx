import React from "react";
import { fetchListings } from "../../actions/listing_actions";
import ListingsIndexItem from "../listings/listings_item";
import Map from "../map/map";

class Search extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchListings()
    }

    render() {
        const { listings } = this.props
        if (!listings) return null;
            return (
            <div className="listings-index-container">
                <div className="listingsindex">
                    {listings.map((listing, i) => (
                        <ListingsIndexItem key={`${listing.title}${i}`} listing={listing} />
                    ))}
                </div>
                <div className="mapcontainerindex">
                    <Map listings={listings} singleListing={false} />
                </div>
            </div>
        )
    }

}

export default Search;