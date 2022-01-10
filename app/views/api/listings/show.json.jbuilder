
    json.partial! '/api/listings/listing', listing: @listing
    json.host @listing.host, :id, :email, :first_name, :last_name, :bio

    if @listing.host.photo.attached?
        json.photoUrl url_for(@listing.host.photo)
    end
