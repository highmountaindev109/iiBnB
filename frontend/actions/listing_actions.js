import * as ListingAPIUtil from "../util/listing_api_util"

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS"
export const RECEIVE_LISTING = "RECEIVE_LISTING"
export const REMOVE_LISTING = "REMOVE_LISTING"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    listings
})

const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing
})

const removeListing = listingId => ({
    type: REMOVE_LISTING,
    listingId
})

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const fetchListings = () => dispatch => (
    ListingAPIUtil.fetchListings()
        .then(listings => dispatch(receiveListings(listings)),
            error => dispatch(receiveErrors(error.responseJSON))
    )
)

export const fetchListing = listingId => dispatch => {
    // debugger
    return (
    ListingAPIUtil.fetchListing(listingId)
        .then(listing => dispatch(receiveListing(listing)),
            error => dispatch(receiveErrors(error.responseJSON)))
)}

export const createListing = listing => dispatch => {
    return(
    ListingAPIUtil.createListing(listing)
        .then(listing => dispatch(receiveListing(listing)),
            error => dispatch(receiveErrors(error.responseJSON)))
)}

export const updateListing = (listing,listingId) => dispatch => {
    return(
    ListingAPIUtil.updateListing(listing,listingId)
        .then(listing => dispatch(receiveListing(listing)),
            error => dispatch(receiveErrors(error.responseJSON)))
)}

export const deleteListing = listingId => dispatch => (
    ListingAPIUtil.deleteListing(listingId)
    .then(() => dispatch(removeListing(listingId)),
        error => dispatch(receiveErrors(error.responseJSON)))
)

