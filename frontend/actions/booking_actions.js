import * as APIBookingUtil from "../util/booking_api_util"

export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS'
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING'
export const REMOVE_BOOKING = 'REMOVE_BOOKING'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

const receiveAllBookings = bookings => ({
    type: RECEIVE_ALL_BOOKINGS,
    bookings,
});

const receiveBooking = booking => ({
    type: RECEIVE_BOOKING,
    booking,
});

const removeBooking = bookingId => ({
    type: REMOVE_BOOKING,
    bookingId
})

const ReceiveErrors = errors => ({
    type:RECEIVE_ERRORS,
    errors
})

export const fetchBookings = () => dispatch => {
    return APIBookingUtil.fetchBookings()
    .then(bookings => dispatch(receiveAllBookings(bookings)))
}

export const fetchBooking = (bookingId) => dispatch => {
    return APIBookingUtil.fetchBooking(bookingId)
    .then(booking => dispatch(receiveBooking(booking)))
}

export const createBooking = (booking) => dispatch => {
    return APIBookingUtil.createBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)))
}

export const updateBooking = (booking) => dispatch => {
    return APIBookingUtil.updateBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)))
}

export const deleteBooking = (bookingId) => dispatch => {
    return APIBookingUtil.deleteBooking(bookingId).then(
        () => dispatch(removeBooking(bookingId))
    )
}