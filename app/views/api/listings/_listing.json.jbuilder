json.extract! listing, :id, :host_id, :title, :description, :address, :guest_limit, :price, :bedrooms, :bathrooms, :longitude , :latitude

json.photos listing.photos.map {|photo| url_for(photo)}
