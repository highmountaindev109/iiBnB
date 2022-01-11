# == Schema Information
#
# Table name: listings
#
#  id          :bigint           not null, primary key
#  host_id     :integer          not null
#  title       :string           not null
#  description :text             not null
#  address     :string           not null
#  guest_limit :integer          not null
#  price       :integer          not null
#  bedrooms    :integer          not null
#  bathrooms   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Listing < ApplicationRecord
    
    validates :title, :description, :address, :guest_limit, :price, :bedrooms, :bathrooms, :longitude , :latitude, presence:true

    belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

    has_many_attached :photos

end
