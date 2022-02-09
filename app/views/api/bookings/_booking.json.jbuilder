json.extract! booking, :id, :listing_id, :guest_id, :number_of_guests, :check_in_date, :check_out_date
// json.partial! '/api/listings/listing', listing: booking.listing