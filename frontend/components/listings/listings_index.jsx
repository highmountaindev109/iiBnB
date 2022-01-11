import React from "react";
import { fetchListings } from "../../actions/listing_actions";
import ListingsIndexItem from "./listings_item";
import Map from "../map/map";

class ListingIndex extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchListings()
    }


    render(){
        const { listings } = this.props
        return (
            <div className="listings-index-container">
                <div className="listingsindex"> 
                    {listings.map ((listing,i) => (
                        <ListingsIndexItem key={`${listing.title}${i}`} listing={listing} />
                    ))}
                </div>
                <div className="mapcontainerindex">
                    <Map />
                </div>
            </div>

        )
    }
}

export default ListingIndex