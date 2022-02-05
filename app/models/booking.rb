class Booking < ApplicationRecord

    validates :listing_id, :guest_id,  presence: true
    validates :number_of_guests, presence: true
    validates :check_in_date , presence: true
    validates :check_out_date , presence: true


    belongs_to :listing,
        class_name: :Listing,
        foreign_key: :listing_id

    belongs_to :guest,
        class_name: :User,
        foreign_key: :guest_id

    has_one :host,
        through: :listing,
        source: :host

end