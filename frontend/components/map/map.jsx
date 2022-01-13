import React from "react";
import MarkerManager from "../../util/marker_manager";
import { withRouter } from "react-router-dom";

class Map extends React.Component {
    constructor(props){
        super(props);
        // this.handleClicker = this.handleClicker.bind(this)
    }

    componentDidMount() {
        const {latitude,longitude} = this.props;
        const mapOptions = {
            center: { lat: 40.706064, lng: -74.008782}, //NYC Coords
            zoom: 14,
            gestureHandling: "greedy"
        };
        
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleClicker.bind(this))
        // debugger
        if (this.props.singleListing){this.props.fetchListing(this.props.listingId)}
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
            this.registerListeners();
            this.MarkerManager.updateMarkers(this.props.listings)
        }
    }

    registerListeners() {
        google.maps.event.addListener( this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();

            const bounds = {
                northEast: { latitude: north, longitude: east },
                southWest: { latitude: south, longitude: west }
            };
            this.props.updateFilter("bounds", bounds);
        })
    }

    handleClicker(listing){
        this.props.history.push(`listings/${listing.id}`)
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
