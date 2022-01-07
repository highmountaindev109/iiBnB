json.partial! '/api/listings/listing', listing: @listing
json.host @listing.host, :id, :email, :first_name, :last_name, :bio