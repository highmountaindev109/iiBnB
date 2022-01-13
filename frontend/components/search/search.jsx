import React from "react";
import updateFilter from "../../actions/filter_actions";
import { fetchListings } from "../../actions/listing_actions";
import ListingsIndexItem from "../listings/listings_item";
import Map from "../map/map";

class Search extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        // this.props.updateFilter()
    }

    render() {
        const { listings } = this.props
        if (!listings) return null;
            return (
            <div className="listings-index-container">
                <div className="listingsindex">
                    {listings.map((listing, i) => (
                        <ListingsIndexItem key={`${listing.title}${i}`} listing={listing} updateFilter={updateFilter} />
                    ))}
                </div>
                <div className="mapcontainerindex">
                    <Map listings={listings} singleListing={false} updateFilter={updateFilter} />
                </div>
            </div>
        )
    }

}

export default Search;