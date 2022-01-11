import React from "react";
import MarkerManager from "../../util/marker_manager";

const fetchCoordinates = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
})


class Map extends React.Component {

    componentDidMount() {
        const mapOptions = {
            center: { lat: 40.706064, lng: -74.008782}, //NYC Coords
            zoom: 10
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    render() {
        return (
            <div id="map" className="map-container" ref={map => this.mapNode = map}> 
            </div>
        )
    }
}
export default Map
