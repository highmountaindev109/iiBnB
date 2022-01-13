import React from "react";
import { fetchListings } from "../../actions/listing_actions";
import ListingsIndexItem from "./listings_item";
import Map from "../map/map";
import MapContainer from "../map/map_container";

class ListingIndex extends React.Component{

    constructor(props){
        super(props);
        // this.state = {
        //     loading:true
        // }
    }

    componentDidMount() {
        this.props.fetchListings()
    }

    render(){
        const { listings } = this.props
        if (!listings) return null;
        return (
            <div className="listings-index-container">
                <div className="listingsindex"> 
                    {listings.map ((listing,i) => (
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

export default ListingIndex