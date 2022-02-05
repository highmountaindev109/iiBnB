export const fetchBookings = () => (
    $.ajax({
        method: 'GET',
        url: '/api/bookings',
    })
)

export const fetchBooking = (BookingId) => {
    return (
    $.ajax({
        url: `/api/bookings/${BookingId}`,
        method: 'GET'
    }))
}

export const createBooking = booking => {
    return (
    $.ajax({
        url: `api/bookings`,
        method: 'POST',
        data: { booking }
    })
)
}

export const updateBooking = (booking) => {
    return (

    $.ajax({
        url: `api/bookings/${booking.id}`,
        method: 'patch',
        data: { booking }
    })
)}

export const deleteListing = bookingId => (
    $.ajax({
        url: `api/bookings/${bookingId}`,
        method: 'delete'
    })
)