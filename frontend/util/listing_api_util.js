export const fetchListings = () => (
    $.ajax({
        method: 'GET',
        url: '/api/listings'
    })
)

export const fetchListing = (listingId) => (
    $.ajax({
        url: `/api/listings/${listingId}`,
        method: 'GET'
    })
)

export const createListing = listing => (
    $.ajax({
        url: `api/listings`,
        method: 'post',
        data: {listing}
    })
)

export const updateListing = listing => (
    $.ajax({
        url: `api/listings/${listing.id}`,
        method: 'patch',
        data: {listing}
    })
)

export const deleteListing = listingId => (
    $.ajax({
        url: `api/listings/${listingId}`,
        method: 'delete'
    })
)