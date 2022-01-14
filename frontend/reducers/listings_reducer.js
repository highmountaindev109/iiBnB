import { RECEIVE_LISTINGS,
RECEIVE_LISTING,
REMOVE_LISTING,
} from "../actions/listing_actions";

const listingsReducer = ( state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({},state);

    switch (action.type) {
        case RECEIVE_LISTINGS:
            return action.listings
        case RECEIVE_LISTING:
            return Object.assign({},{[action.listing.id]:action.listing})
        case REMOVE_LISTING:
            delete newState[action.listingId]
            return newState
        default:
            return state
    }
}

export default listingsReducer