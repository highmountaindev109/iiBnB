import React from "react";
import MarkerManager from "../../util/marker_manager";

class Map extends React.Component {
    constructor(props){
        super(props);
        // debugger
    }

    componentDidMount() {
        const {latitude,longitude} = this.props;
        const mapOptions = {
            center: { lat: 40.706064, lng: -74.008782}, //NYC Coords
            zoom: 11
        };
        
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map)
        // debugger
        if (this.props.singleListing){this.props.fetchListing(this.props.listingId)}
        else {
        this.MarkerManager.updateMarkers(this.props.listings)}
        // debugger
    }

    componentDidUpdate() {
        // debugger;
        if (this.props.singleListing) { 
            const targetlistingKey = Object.keys(this.props.listings)[0];
            const targetlisting = this.props.listings[targetlistingKey];
            this.MarkerManager.updateMarkers([targetlisting])
        }
        else {
            this.MarkerManager.updateMarkers(this.props.listings)
        }
    }

    render() {
        // debugger
        return (
            <div id="map" className="map-container" ref={map => this.mapNode = map}> 
            </div>
        )
    }
}
export default Map
