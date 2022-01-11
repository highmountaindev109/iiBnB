export const fetchListings = () => (
    $.ajax({
        method: 'GET',
        url: '/api/listings'
    })
)

export const fetchListing = (listingId) => {
    return (
    $.ajax({
        url: `/api/listings/${listingId}`,
        method: 'GET'
    }))
}

export const createListing = listing => {
    return (
    $.ajax({
        url: `api/listings`,
        method: 'POST',
        data: listing,
        contentType: false,
        processData: false
    })
)
}

export const updateListing = (listing,listingId) => {
    debugger
    return (

    $.ajax({
        url: `api/listings/${listingId}`,
        method: 'patch',
        data: listing,
        contentType: false,
        processData: false
    })
)}

export const deleteListing = listingId => (
    $.ajax({
        url: `api/listings/${listingId}`,
        method: 'delete'
    })
)