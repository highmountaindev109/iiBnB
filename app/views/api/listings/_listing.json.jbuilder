json.extract! listing, :id, :host_id, :title, :description, :address, :guest_limit, :price, :bedrooms, :bathrooms

json.photos listing.photos.map {|photo| url_for(photo)}
