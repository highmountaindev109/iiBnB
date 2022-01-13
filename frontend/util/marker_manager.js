
export default class MarkerManager {
    constructor(map, handleClicker) {
        this.map = map; 
        this.markers = {};
        this.handleClicker = handleClicker;
        // debugger
    }

    updateMarkers(listings){
        const listingObj = {}
        // debugger
        listings.forEach(listing => listingObj[listing.id] = listing)
        listings
            .filter(listing => !this.markers[listing.id])
            .forEach(newListing => this.createMarkerFromListing(newListing, this.handleClicker))
        Object.keys(this.markers)
            .filter(listingId => !listingObj[listingId])
            .forEach( listingId => this.removeMarker(this.markers[listingId]))
    }

    createMarkerFromListing(listing) {
        // const mapIcon = {
        //     path: "M 0 0 H 30 V 30 H 0 L 0 0",
        //     fillColor: "white",
        //     fillOpacity: 1,
        //     scale: .90,
        //     labelOrigin: new google.maps.Point(0, -25),
        // }

        let position = new google.maps.LatLng(listing.latitude, listing.longitude);
        // debugger
        let marker = new google.maps.Marker({
            title: listing.title,
            position,
            map: this.map,
            listingId: listing.id,
            animation: google.maps.Animation.DROP,
            label: {
                text: `$${listing.price}`,
                font: "8px",
                color: "white"
            },
            // icon: mapIcon
        })
        marker.addListener('click', () => this.handleClicker(listing))
        this.markers[marker.listingId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.listingId].setMap(null);
        delete this.markers[marker.listingId];
    }
}
