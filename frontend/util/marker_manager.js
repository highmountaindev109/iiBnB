
export default class MarkerManager {
    constructor(map) {
        this.map = map; 
        this.markers = {};
        // debugger
    }

    updateMarkers(listings){
        const listingObj = {}
        debugger
        listings.forEach(listing => listingObj[listing.id] = listing)
        listings
            .filter(listing => !this.markers[listing.id])
            .forEach(newListing => this.createMarkerFromListing(newListing))
        Object.keys(this.markers)
            .filter(listingId => !listingObj[listingId])
            .forEach( listingId => this.removeMarker(this.markers[listingId]))
    }

    createMarkerFromListing(listing) {
        let position = new google.maps.LatLng(listing.latitude, listing.longitude);
        // debugger
        let marker = new google.maps.Marker({
            title: listing.title,
            position,
            map: this.map,
            listingId: listing.id
        })

        this.markers[marker.listingId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.listingId].setMap(null);
        delete this.markers[marker.listingId];
    }
}

// export default MarkerManager