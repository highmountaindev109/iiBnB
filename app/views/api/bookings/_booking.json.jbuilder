json.extract! booking, :id, :listing_id, :guest_id, :number_of_guests, :check_in_date, :check_out_date
json.listing booking.listing, :id, :host_id, :title, :description, :address, :guest_limit, :price, :bedrooms, :bathrooms, :longitude , :latitude
json.listingPhoto booking.listing.photos.map{|photo| url_for(photo)}[0]
json.host booking.listing.host, :id, :first_name