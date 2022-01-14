import React from "react";
import MarkerManager from "../../util/marker_manager";
import { withRouter } from "react-router-dom";
// center: { lat: 40.706064, lng: -74.008782 }, //NYC Coords

class Map extends React.Component {
    constructor(props){
        super(props);
        this.handleClicker = this.handleClicker.bind(this)
        this.registerListeners = this.registerListeners.bind(this)
    }

    componentDidMount() {
        let latitude;
        let longitude;
        if (this.props.singleListing) {
            latitude = this.props.listings[0].latitude;
            longitude = this.props.listings[0].longitude;
        } else {
            latitude = this.props.latitude;
            longitude = this.props.longitude}
        latitude ||= 40.706064;
        longitude ||= -74.008782
        const mapOptions = {
            center: { lat: parseFloat(latitude), lng: parseFloat(longitude)}, //NYC Coords
            zoom: 14,
            gestureHandling: "greedy"
        };
        debugger
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleClicker.bind(this))
        // debugger
        if (this.props.singleListing){
            this.props.fetchListing(this.props.listingId)
        }
        else {
        this.registerListeners();
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
            // this.registerListeners();
            this.MarkerManager.updateMarkers(this.props.listings)
        }
    }

    registerListeners() {
        // debugger
        google.maps.event.addListener( this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            // debugger
            const bounds = {
                northEast: { latitude: north, longitude: east },
                southWest: { latitude: south, longitude: west }
            };
            this.props.fetchListings({bounds: bounds});
        })
    }

    handleClicker(listing){
        this.props.history.push(`/listings/${listing.id}`)
    }

    render() {
        // debugger
        return (
            <div id="map" className="map-container" ref={map => this.mapNode = map}> 
            </div>
        )
    }
}
export default withRouter(Map);
