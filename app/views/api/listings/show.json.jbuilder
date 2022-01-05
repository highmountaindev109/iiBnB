json.partial! '/api/listings/listing', listing: @listing
json.host @listing.user, :id, :email, :first_name, :last_name, :bio