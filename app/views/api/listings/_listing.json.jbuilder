json.extract! listing, :id, :host_id, :title, :description, :address, :guest_limit, :price, :bedrooms, :bathrooms

if listing.photos.attached?
    json.photoUrl listing.photoUrl listing.photos.map {|photo| url_for(photo)}
end