import React from "react";
import updateFilter from "../../actions/filter_actions";
import { fetchListings } from "../../actions/listing_actions";
import ListingsIndexItem from "../listings/listings_item";
import Map from "../map/map";
import MapContainer from "../map/map_container";

class Search extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        // this.props.updateFilter()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.location !== this.props.match.params.location) {
        }
    }

    render() {
        const { listings,latitude,longitude } = this.props
        if (!listings) return null;
            return (
            <div className="listings-index-container">
                <div className="listingsindexleft">
                <div className="counter"> {this.props.listings.length}+ listings in the area </div>
                <div className="listingsindex">
                    {listings.map((listing, i) => (
                        <ListingsIndexItem key={`${listing.title}${i}`} listing={listing} updateFilter={updateFilter} />
                    ))}
                </div>
                </div>
                <div className="mapcontainerindex">
                    <MapContainer listings={listings} singleListing={false} updateFilter={updateFilter} latitude={latitude} longitude={longitude}/>
                </div>
            </div>
        )
    }

}

export default Search;